import Schemas from '../schemas/index';

import { dailyAttendanceProperties } from '../../types/dailyAttendance';

import BSON from 'bson';

import Realm from 'realm';

import Auth from '../queries/auth';

import { showToast } from '../utils/utilsUI';

import {
  getObjectId,
  hashPassword,
  generateRandomByte,
  getLocationIDS,
} from '../utils/utils';

import { _APP_INSTANCE_, _DATA_BASE_INSTACE_ } from './dbConfig';

import { documentExist, getPHC_configSettings } from './readQueries';

import { setAdminExist } from './configApp';

export async function createCommunityLeader(
  documents: any,
  isUpdate?: boolean
) {
  try {
    if (!isUpdate) {
      documents._id = getObjectId();

      const { phc_state, phc_lga } = getPHC_configSettings();

      let { state_id, lga_id } = getLocationIDS(phc_state, phc_lga);

      documents['state_id'] = state_id;
      documents['lga_id'] = lga_id;

      documents.health_facility_id = getPHC_configSettings().phc_id;

      documents.leader_id = generateRandomByte();

      const leaderExist = documentExist(
        `email = "${documents.email}"`,
        Schemas.CommunityLeaders.name
      );

      if (leaderExist) {
        showToast('Email Already exist !!!');

        return new Error('Email aready In use');
      }
    }

    const realm = _DATA_BASE_INSTACE_;

    realm.write(() => {
      if (!isUpdate) {
        realm.create(Schemas.CommunityLeaders.name, documents);
      } else {
        realm.create(Schemas.CommunityLeaders.name, documents, true);
      }
    });

    return 'success';
  } catch (e) {
    console.log(e);
    return e;
  }
}

export async function createPHC_Staff(
  documents: any,
  isUpdate: boolean,
  isFirst?: boolean
) {
  try {
    let creds = hashPassword(documents.password);

    const { phc_state, phc_lga } = getPHC_configSettings();

    let { state_id, lga_id } = getLocationIDS(phc_state, phc_lga);

    documents['state_id'] = state_id;
    documents['lga_id'] = lga_id;

    delete documents.password;

    documents.salt = creds.salt;

    documents.hash = creds.hash;

    if (!isUpdate) {
      documents.staff_id = generateRandomByte();
      documents.health_facility_id = getPHC_configSettings().phc_id;
      documents._id = getObjectId();
    }

    let realm;

    if (!isFirst) {
      realm = new Realm({
        schema: [Schemas.StaffSchema],
        schemaVersion: 1,
        sync: {
          user: _APP_INSTANCE_.currentUser,
          partitionValue: getPHC_configSettings().phc_id,
        },
      });

      realm.write(() => {
        if (isUpdate) {
          realm.create(Schemas.StaffSchema.name, documents, true);
        } else {
          realm.create(Schemas.StaffSchema.name, documents);
        }
      });

      setAdminExist('true');

      return 'success';
    } else {
      realm = await Realm.open({
        schema: [Schemas.StaffSchema],
        schemaVersion: 1,
        sync: {
          user: _APP_INSTANCE_.currentUser,
          partitionValue: getPHC_configSettings().phc_id,
        },
      });

      realm.write(() => {
        if (isUpdate) {
          realm.create(Schemas.StaffSchema.name, documents, true);
        } else {
          realm.create(Schemas.StaffSchema.name, documents);
        }
      });

      setAdminExist('true');

      return 'success';
    }
  } catch (e) {
    console.log(e);
    return e;
  }
}

export async function createDailyAttendance(document: any, isUpdate?: boolean) {
  try {
    const realm = _DATA_BASE_INSTACE_;

    if (document.date_of_birth) {
      document['date_of_birth'] = new Date(document.date_of_birth);
    } else {
      delete document.date_of_birth;
    }

    document.date = new Date(document.date);

    const { phc_state, phc_lga } = getPHC_configSettings();

    let { state_id, lga_id } = getLocationIDS(phc_state, phc_lga);

    document['state_id'] = state_id;

    document['lga_id'] = lga_id;
    document['health_facility_id'] = getPHC_configSettings().phc_id;
    document['createdBy'] = Auth.getCurrentUser().staff_id;

    if (!isUpdate) {
      document._id = new BSON.ObjectID();
    }

    const check = documentExist(
      `client_card_number = "${document.client_card_number}"`,
      Schemas.ClientSchema.name
    );

    realm.write(() => {
      if (check) {
        const getClientDailyRecords = realm
          .objects(Schemas.DailyAttendanceSchema.name)
          .filtered('client_card_number = $0', document.client_card_number);

        getClientDailyRecords.forEach((client: any) => {
          client.age = document.age;
          client.client_name = document.client_name;
          client.contact_address = document.contact_address;
          client.date_of_birth = document.date_of_birth;
          client.exact_age = document.exact_age;
          client.telephone_no = document.telephone_no;
          client.kin_address = document.kin_address;
          client.kin_phone = document.kin_phone;
          client.kin_relationship_with_client =
            document.kin_relationship_with_client;
          client.next_of_kin_name = document.next_of_kin_name;
          client.state_of_origin = document.state_of_origin;
          client.first_contact_with_facility =
            document.first_contact_with_facility;
          client.reference_in = document.reference_in;
          client.state_id = document.state_id;
          client.lga_id = document.lga_id;
        });

        const clientFound = realm
          .objects(Schemas.ClientSchema.name)
          .filtered('client_card_number = $0', document.client_card_number);

        clientFound.forEach((client: any) => {
          client.age = document.age;
          client.client_name = document.client_name;
          client.contact_address = document.contact_address;
          client.date_of_birth = document.date_of_birth;
          client.state_of_origin = document.state_of_origin;
          client.exact_age = document.exact_age;
          client.telephone_no = document.telephone_no;
          client.kin_address = document.kin_address;
          client.kin_phone = document.kin_phone;
          client.kin_relationship_with_client =
            document.kin_relationship_with_client;
          client.next_of_kin_name = document.next_of_kin_name;
          client.first_contact_with_facility =
            document.first_contact_with_facility;
          client.reference_in = document.reference_in;
          client.state_id = document.state_id;
          client.lga_id = document.lga_id;
        });
      } else {
        realm.create(Schemas.ClientSchema.name, document);
      }

      if (!isUpdate) {
        realm.create(Schemas.DailyAttendanceSchema.name, document);
      }
    });

    return 'success';
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function createBirthRegister(documents: any, isUpdate?: boolean) {
  try {
    const { phc_state, phc_lga } = getPHC_configSettings();

    let { state_id, lga_id } = getLocationIDS(phc_state, phc_lga);

    documents['state_id'] = state_id;

    documents['lga_id'] = lga_id;

    if (!isUpdate) {
      documents._id = getObjectId();

      documents.health_facility_id = getPHC_configSettings().phc_id;

      documents.createdBy = Auth.getCurrentUser().staff_id;
    }

    documents.child_reg_date = new Date(documents.child_reg_date);

    if (documents.dob) {
      documents.dob = new Date(documents.dob);
    } else {
      delete documents.dob;
    }

    const realm = _DATA_BASE_INSTACE_;

    realm.write(() => {
      if (!isUpdate) {
        realm.create(Schemas.BirthRegister.name, documents);
      } else {
        realm.create(Schemas.BirthRegister.name, documents, true);
      }
    });

    return 'success';
  } catch (e) {
    console.log(e);
    return e;
  }
}

export async function createFacilityService(
  documents: any,
  isUpdate?: boolean
) {
  try {
    const { phc_state, phc_lga } = getPHC_configSettings();

    let { state_id, lga_id } = getLocationIDS(phc_state, phc_lga);

    documents['state_id'] = state_id;

    documents['lga_id'] = lga_id;

    if (!isUpdate) {
      documents._id = getObjectId();

      documents.health_facility_id = getPHC_configSettings().phc_id;

      documents.createdBy = Auth.getCurrentUser().staff_id;
    }

    const realm = _DATA_BASE_INSTACE_;

    realm.write(() => {
      if (!isUpdate) {
        realm.create(Schemas.Services.name, documents);
      } else {
        realm.create(Schemas.Services.name, documents, true);
      }
    });

    return 'success';
  } catch (e) {
    console.log(e);
    return e;
  }
}

export async function createReferalOut(documents: any, isUpdate?: boolean) {
  try {
    const { phc_state, phc_lga } = getPHC_configSettings();

    let { state_id, lga_id } = getLocationIDS(phc_state, phc_lga);

    documents['state_id'] = state_id;
    documents['lga_id'] = lga_id;

    if (!isUpdate) {
      documents._id = getObjectId();

      documents.health_facility_id = getPHC_configSettings().phc_id;

      documents.createdBy = Auth.getCurrentUser().staff_id;
    }

    documents.referal_date = new Date(documents.referal_date);

    const realm = _DATA_BASE_INSTACE_;

    realm.write(() => {
      if (!isUpdate) {
        realm.create(Schemas.ReferalOut.name, documents);
      } else {
        realm.create(Schemas.ReferalOut.name, documents, true);
      }
    });

    return 'success';
  } catch (e) {
    console.log(e);
    return e;
  }
}

export async function createAntenatal(documents: any, isUpdate?: boolean) {
  try {
    documents.date = new Date(documents.date);

    documents.dob = new Date();

    const { phc_state, phc_lga } = getPHC_configSettings();

    let { state_id, lga_id } = getLocationIDS(phc_state, phc_lga);

    documents['state_id'] = state_id;

    documents['lga_id'] = lga_id;

    if (!isUpdate) {
      documents.health_facility_id = getPHC_configSettings().phc_id;

      documents.createdBy = Auth.getCurrentUser().staff_id;

      documents._id = getObjectId();
    }

    const realm = _DATA_BASE_INSTACE_;

    realm.write(() => {
      if (!isUpdate) {
        realm.create(Schemas.Antenatal.name, documents);
      } else {
        realm.create(Schemas.Antenatal.name, documents, true);
      }
    });

    return 'success';
  } catch (e) {
    console.log(e);
    return e;
  }
}

export async function createFamilyPlaning(documents: any, isUpdate?: boolean) {
  try {
    if (!documents.natural_methods_cb) documents.natural_methods_cb = [' '];
    if (!documents.natural_methods_others)
      documents.natural_methods_others = [' '];
    if (!documents.natural_methods_referal)
      documents.natural_methods_referal = [' '];

    const { phc_state, phc_lga } = getPHC_configSettings();

    let { state_id, lga_id } = getLocationIDS(phc_state, phc_lga);

    documents['state_id'] = state_id;

    documents['lga_id'] = lga_id;

    documents.date = new Date(documents.date);

    documents.dob = new Date();

    if (!isUpdate) {
      documents.health_facility_id = getPHC_configSettings().phc_id;

      documents.createdBy = Auth.getCurrentUser().staff_id;

      documents._id = getObjectId();
    }

    const realm = _DATA_BASE_INSTACE_;

    realm.write(() => {
      if (!isUpdate) {
        realm.create(Schemas.FamilyPlaning.name, documents);
      } else {
        realm.create(Schemas.FamilyPlaning.name, documents, true);
      }
    });

    return 'success';
  } catch (e) {
    console.log(e);
    return e;
  }
}

export async function createInPatient(documents: any, isUpdate?: boolean) {
  try {
    documents.date = new Date(documents.date);

    const { phc_state, phc_lga } = getPHC_configSettings();

    let { state_id, lga_id } = getLocationIDS(phc_state, phc_lga);

    documents['state_id'] = state_id;

    documents['lga_id'] = lga_id;

    if (documents.dob) {
      documents.dob = new Date(documents.dob);
    } else {
      delete documents.dob;
    }

    if (!isUpdate) {
      documents.health_facility_id = getPHC_configSettings().phc_id;

      documents.createdBy = Auth.getCurrentUser().staff_id;

      documents._id = getObjectId();
    }

    const realm = _DATA_BASE_INSTACE_;

    realm.write(() => {
      if (!isUpdate) {
        realm.create(Schemas.Inpatient.name, documents);
      } else {
        realm.create(Schemas.Inpatient.name, documents, true);
      }
    });

    return 'success';
  } catch (e) {
    console.log(e);
    return e;
  }
}

export async function createLabourAndDelivery(
  documents: any,
  isUpdate?: boolean
) {
  try {
    documents.date = new Date(documents.date);

    const { phc_state, phc_lga } = getPHC_configSettings();

    let { state_id, lga_id } = getLocationIDS(phc_state, phc_lga);

    documents['state_id'] = state_id;

    documents['lga_id'] = lga_id;

    if (documents.delivery_date) {
      documents.delivery_date = new Date(documents.delivery_date);
    } else {
      delete documents.delivery_date;
    }

    if (!isUpdate) {
      documents._id = getObjectId();

      documents.health_facility_id = getPHC_configSettings().phc_id;

      documents.createdBy = Auth.getCurrentUser().staff_id;
    }

    const realm = _DATA_BASE_INSTACE_;

    realm.write(() => {
      if (!isUpdate) {
        realm.create(Schemas.LabourAndDelivery.name, documents);
      } else {
        realm.create(Schemas.LabourAndDelivery.name, documents, true);
      }
    });

    return 'success';
  } catch (e) {
    console.log(e);
    return e;
  }
}

export async function createPostNatal(documents: any, isUpdate?: boolean) {
  try {
    documents.date = new Date(documents.date);

    const { phc_state, phc_lga } = getPHC_configSettings();

    let { state_id, lga_id } = getLocationIDS(phc_state, phc_lga);

    documents['state_id'] = state_id;

    documents['lga_id'] = lga_id;

    if (!isUpdate) {
      documents.health_facility_id = getPHC_configSettings().phc_id;

      documents.createdBy = Auth.getCurrentUser().staff_id;

      documents._id = getObjectId();
    }

    const realm = _DATA_BASE_INSTACE_;

    realm.write(() => {
      if (!isUpdate) {
        realm.create(Schemas.PostNatal.name, documents);
      } else {
        realm.create(Schemas.PostNatal.name, documents, true);
      }
    });

    return 'success';
  } catch (e) {
    console.log(e);
    return e;
  }
}

export async function _AdministerImmunizationVaccine(
  documents: any,
  isUpdate?: boolean
) {
  try {
    const { phc_state, phc_lga } = getPHC_configSettings();

    let { state_id, lga_id } = getLocationIDS(phc_state, phc_lga);

    documents['state_id'] = state_id;
    documents['lga_id'] = lga_id;

    if (!isUpdate) {
      documents.health_facility_id = getPHC_configSettings().phc_id;

      documents._id = getObjectId();
    }

    const realm = _DATA_BASE_INSTACE_;

    realm.write(() => {
      if (!isUpdate) {
        realm.create(Schemas.AdministerVaccine.name, documents);
      } else {
        realm.create(Schemas.AdministerVaccine.name, documents, true);
      }
    });

    return 'success';
  } catch (e) {
    console.log(e);
    return e;
  }
}

export async function _AdministerTD(documents: any, isUpdate?: boolean) {
  try {
    const { phc_state, phc_lga } = getPHC_configSettings();

    let { state_id, lga_id } = getLocationIDS(phc_state, phc_lga);

    documents['state_id'] = state_id;
    documents['lga_id'] = lga_id;
    if (!isUpdate) {
      documents.health_facility_id = getPHC_configSettings().phc_id;

      documents._id = getObjectId();
    }

    const realm = _DATA_BASE_INSTACE_;

    realm.write(() => {
      if (!isUpdate) {
        realm.create(Schemas.TetanusAdministration.name, documents);
      } else {
        realm.create(Schemas.TetanusAdministration.name, documents, true);
      }
    });

    return 'success';
  } catch (e) {
    console.log(e);
    return e;
  }
}

export async function createImmunization(documents: any, isUpdate?: boolean) {
  try {
    const { phc_state, phc_lga } = getPHC_configSettings();

    let { state_id, lga_id } = getLocationIDS(phc_state, phc_lga);

    documents['state_id'] = state_id;
    documents['lga_id'] = lga_id;

    documents.date = new Date(documents.date);

    if (documents.dob) {
      documents.dob = new Date(documents.dob);
    } else {
      delete documents.dob;
    }

    if (!isUpdate) {
      documents._id = getObjectId();

      documents.health_facility_id = getPHC_configSettings().phc_id;

      documents.createdBy = Auth.getCurrentUser().staff_id;
    }

    const realm = _DATA_BASE_INSTACE_;

    realm.write(() => {
      if (!isUpdate) {
        realm.create(Schemas.Immunization.name, documents);
      } else {
        realm.create(Schemas.Immunization.name, documents, true);
      }
    });

    return 'success';
  } catch (e) {
    console.log(e);
    return e;
  }
}

export async function createOutpatient(documents: any, isUpdate?: boolean) {
  try {
    const { phc_state, phc_lga } = getPHC_configSettings();

    let { state_id, lga_id } = getLocationIDS(phc_state, phc_lga);

    documents['state_id'] = state_id;
    documents['lga_id'] = lga_id;

    documents.date = new Date(documents.date);

    if (documents.date_of_birth) {
      documents.date_of_birth = new Date(documents.date_of_birth);
    } else {
      delete documents.date_of_birth;
    }

    if (!isUpdate) {
      documents.health_facility_id = getPHC_configSettings().phc_id;

      documents.createdBy = Auth.getCurrentUser().staff_id;

      documents._id = getObjectId();
    }

    const realm = _DATA_BASE_INSTACE_;

    realm.write(() => {
      if (!isUpdate) {
        realm.create(Schemas.OutPatient.name, documents);
      } else {
        realm.create(Schemas.OutPatient.name, documents, true);
      }
    });

    return 'success';
  } catch (e) {
    console.log(e);
    return e;
  }
}

export async function createNutrition(documents: any, isUpdate?: boolean) {
  try {
    const { phc_state, phc_lga } = getPHC_configSettings();

    let { state_id, lga_id } = getLocationIDS(phc_state, phc_lga);

    documents['state_id'] = state_id;
    documents['lga_id'] = lga_id;

    documents.date = new Date(documents.date);

    if (documents.date_of_birth) {
      documents.date_of_birth = new Date(documents.date_of_birth);
    } else {
      delete documents.date_of_birth;
    }

    if (!isUpdate) {
      documents.health_facility_id = getPHC_configSettings().phc_id;

      documents.createdBy = Auth.getCurrentUser().staff_id;

      documents._id = getObjectId();
    }

    const realm = _DATA_BASE_INSTACE_;

    realm.write(() => {
      if (!isUpdate) {
        realm.create(Schemas.Nutrition.name, documents);
      } else {
        realm.create(Schemas.Nutrition.name, documents, true);
      }
    });

    return 'success';
  } catch (e) {
    console.log(e);
    return e;
  }
}

export async function createTetanus(documents: any, isUpdate?: boolean) {
  try {
    const { phc_state, phc_lga } = getPHC_configSettings();

    let { state_id, lga_id } = getLocationIDS(phc_state, phc_lga);

    documents['state_id'] = state_id;
    documents['lga_id'] = lga_id;

    documents.date_of_visit = new Date(documents.date_of_visit);
    if (!documents.email) {
      documents.email = ' ';
    }

    if (documents.date_of_birth) {
      documents.date_of_birth = new Date(documents.date_of_birth);
    } else {
      delete documents.date_of_birth;
    }

    if (!isUpdate) {
      documents.health_facility_id = getPHC_configSettings().phc_id;

      documents.createdBy = Auth.getCurrentUser().staff_id;

      documents._id = getObjectId();
    }

    const realm = _DATA_BASE_INSTACE_;

    realm.write(() => {
      if (!isUpdate) {
        realm.create(Schemas.Tetanus.name, documents);
      } else {
        realm.create(Schemas.Tetanus.name, documents, true);
      }
    });

    return 'success';
  } catch (e) {
    console.log(e);
    return e;
  }
}

export async function createVaccineUtilRecord(
  documents: any,
  isUpdate?: boolean
) {
  try {
    const { phc_state, phc_lga } = getPHC_configSettings();

    let { state_id, lga_id } = getLocationIDS(phc_state, phc_lga);

    documents['state_id'] = state_id || '12';
    documents['lga_id'] = lga_id || '13';
    let formatDate = new Date(documents.date);
    formatDate.setDate(1);
    documents.date = new Date(formatDate);

    if (!isUpdate) {
      documents.health_facility_id = getPHC_configSettings().phc_id;

      documents._id = getObjectId();
    }

    const realm = _DATA_BASE_INSTACE_;

    realm.write(() => {
      if (!isUpdate) {
        realm.create(Schemas.Vaccine.name, documents);
      } else {
        realm.create(Schemas.Vaccine.name, documents, true);
      }
    });

    return 'success';
  } catch (e) {
    console.log(e);
    return e;
  }
}

export async function createDeviceRecord(documents: any, isUpdate?: boolean) {
  try {
    const { phc_state, phc_lga } = getPHC_configSettings();

    let { state_id, lga_id } = getLocationIDS(phc_state, phc_lga);

    documents['state_id'] = state_id || '12';
    documents['lga_id'] = lga_id || '13';

    let formatDate = new Date(documents.date);

    documents.date = new Date(formatDate);

    if (!isUpdate) {
      documents.health_facility_id = getPHC_configSettings().phc_id;

      documents._id = getObjectId();
    }

    const realm = _DATA_BASE_INSTACE_;

    realm.write(() => {
      if (!isUpdate) {
        realm.create(Schemas.Device.name, documents);
      } else {
        realm.create(Schemas.Device.name, documents, true);
      }
    });

    return 'success';
  } catch (e) {
    console.log(e);
    return e;
  }
}

export async function createDosesDiscardedRecord(
  documents: any,
  isUpdate?: boolean
) {
  try {
    const { phc_state, phc_lga } = getPHC_configSettings();

    let { state_id, lga_id } = getLocationIDS(phc_state, phc_lga);

    documents['state_id'] = state_id || '12';
    documents['lga_id'] = lga_id || '13';

    let formatDate = new Date(documents.date);

    documents.date = new Date(formatDate);

    documents.expiry = new Date(documents.expiry);

    if (!isUpdate) {
      documents.health_facility_id = getPHC_configSettings().phc_id;

      documents._id = getObjectId();
    }

    const realm = _DATA_BASE_INSTACE_;

    realm.write(() => {
      if (!isUpdate) {
        realm.create(Schemas.DosesDiscarded.name, documents);
      } else {
        realm.create(Schemas.DosesDiscarded.name, documents, true);
      }
    });

    return 'success';
  } catch (e) {
    console.log(e);
    return e;
  }
}

export async function createEquipmentRecord(
  documents: any,
  isUpdate?: boolean
) {
  try {
    const { phc_state, phc_lga } = getPHC_configSettings();

    let { state_id, lga_id } = getLocationIDS(phc_state, phc_lga);

    documents['state_id'] = state_id || '12';
    documents['lga_id'] = lga_id || '13';

    let formatDate = new Date(documents.date);

    documents.date = new Date(formatDate);

    if (!isUpdate) {
      documents.health_facility_id = getPHC_configSettings().phc_id;

      documents._id = getObjectId();
    }

    const realm = _DATA_BASE_INSTACE_;

    realm.write(() => {
      if (!isUpdate) {
        realm.create(Schemas.Equipments.name, documents);
      } else {
        realm.create(Schemas.Equipments.name, documents, true);
      }
    });

    return 'success';
  } catch (e) {
    console.log(e);
    return e;
  }
}

export async function createImmunizationAefiRecord(
  documents: any,
  isUpdate?: boolean
) {
  try {
    const { phc_state, phc_lga } = getPHC_configSettings();

    let { state_id, lga_id } = getLocationIDS(phc_state, phc_lga);

    documents['state_id'] = state_id || '12';
    documents['lga_id'] = lga_id || '13';

    let formatDate = new Date(documents.date);

    documents.date = new Date(formatDate);

    if (!isUpdate) {
      documents.health_facility_id = getPHC_configSettings().phc_id;

      documents._id = getObjectId();
    }

    const realm = _DATA_BASE_INSTACE_;

    realm.write(() => {
      if (!isUpdate) {
        realm.create(Schemas.ImmunizationAefi.name, documents);
      } else {
        realm.create(Schemas.ImmunizationAefi.name, documents, true);
      }
    });

    return 'success';
  } catch (e) {
    console.log(e);
    return e;
  }
}

export async function createImmunizationRiRecord(
  documents: any,
  isUpdate?: boolean
) {
  try {
    const { phc_state, phc_lga } = getPHC_configSettings();

    let { state_id, lga_id } = getLocationIDS(phc_state, phc_lga);

    documents['state_id'] = state_id || '12';
    documents['lga_id'] = lga_id || '13';

    let formatDate = new Date(documents.date);

    documents.date = new Date(formatDate);

    if (!isUpdate) {
      documents.health_facility_id = getPHC_configSettings().phc_id;

      documents._id = getObjectId();
    }

    const realm = _DATA_BASE_INSTACE_;

    realm.write(() => {
      if (!isUpdate) {
        realm.create(Schemas.ImmunizationRi.name, documents);
      } else {
        realm.create(Schemas.ImmunizationRi.name, documents, true);
      }
    });

    return 'success';
  } catch (e) {
    console.log(e);
    return e;
  }
}
