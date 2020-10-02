import React from "react";
import SideBar from "./sidebar";
import { Route, Switch, Redirect } from "react-router-dom";
import DashboardDefault from "./dashboardDefault";
import Clients from "./clients";
import BirthRegister from "./birthRegister";
import DailyAttendance from "./dailyAttendance";
import ReferalOut from "./referalOut";
import PhcStaff from "./phcStaff";
import Antenatal from "./interventions/antenatal";
import OutPatient from "./interventions/outPatient";
import LabourAndDelivery from "./interventions/labourAndDelivery";
import InPatient from "./interventions/inPatient";
import TetanusDiphtherial from "./interventions/tetanus";
import PostNatal from "./interventions/postNatal";
import Nutrition from "./interventions/nutrition";
import ChildImunization from "./interventions/immunization";
import FamilyPlaning from "./interventions/familyPlaning";
import AllUsers from "./allUsers";
import COVID19 from "./covid19";
import CommunityLeaders from "./communityLeaders";
import FACILITYSERVICES from "./facilityServices";
import Login from '../layout/login'
import Realm from 'realm'

import electron from 'electron';

// FORMS FOR INTERVENITONS

import DailyAttendanceForm from '../Forms/dailyAttendance'
import BirthRegisterForm from '../Forms/birthRegister'
import PhcStaffForm from '../Forms/phcStaff'
import ReferalOutForm from '../Forms/referalOut'
import CommunityLeaderForm from '../Forms/communityLeader'
import AntenatalForm from '../Forms/antenatal'
import TetanusDiphtherialForm from '../Forms/tetanus';
import NutritionForm from '../Forms/nutrition'
import OutPatientForm from '../Forms/out-patient'
import FamilyPlanningForm from '../Forms/familyPlanning'
import InPatientForm from '../Forms/inPatient'
import LabourAndDeliveryForm from '../Forms/labourAndDelivery'
import PostNatalForm from '../Forms/postNatal'
import Auth from '../../realm/queries/auth';
import ImmunizationForm from '../Forms/immunization';
import {getPHC_configSettings} from "../../realm/queries/readQueries";


export default class Dashboard extends React.Component {

  state = {
    isAdmin :false,
    phc_name: ""
  }

  componentDidMount(){


    const {phc_name} = getPHC_configSettings();
    const user = Auth.getCurrentUser();
    const isAdmin = user.role == "Officer in Charge" ? true : false;
    this.setState({isAdmin:isAdmin,phc_name:phc_name});


  }


  render() {




    return (
      <div className="all-wrapper with-side-panel solid-bg-all">
        <div className="layout-w">
          {/*------------------
                 DASHBOARD SIDEBAR
                ------------------*/}

          <SideBar
            isAdmin={this.state.isAdmin}
            logout={()=>this.props.logout()}
            phc_name={this.state.phc_name}
            />

          {/*------------------
                  MAIN CONTENT VIEW
                ------------------*/}
          <div className="content-w">
            <Switch>
              {/* MAIN ROUTES */}

              <Route exact path="/">
                <DashboardDefault />
              </Route>
              <Route exact path="/dashboard">
                <DashboardDefault />
              </Route>
              <Route exact path="/birth-register" component={BirthRegister} />
              <Route exact path="/clients" component={Clients} />
              <Route exact path="/phc-staff" component={PhcStaff} />
              <Route exact path="/referal-out" component={ReferalOut} />
              <Route exact path="/daily-attendance" component={DailyAttendance} />
              {/* INTERVENTIONS ROUTES */}

              <Route exact path="/antenatal-care" component={Antenatal} />
              <Route exact path="/child-immunization" component={ChildImunization} />
              <Route exact path="/out-patient" component={OutPatient} />
              <Route exact path="/in-patient" component={InPatient} />
              <Route exact
                path="/labour-and-delivery"
                component={LabourAndDelivery}
              />
              <Route exact
                path="/tetanus-diphtherial"
                component={TetanusDiphtherial}
              />
              <Route exact path="/post-natal" component={PostNatal} />
              <Route exact path="/family-planing" component={FamilyPlaning} />
              <Route exact path="/nutrition" component={Nutrition} />

              {/* OTHER ROUTE exactS */}

              <Route exact path="/all-users" component={AllUsers} />
              <Route exact path="/covid-19" component={COVID19} />
              <Route exact path="/community-leaders" component={CommunityLeaders} />
              <Route exact path="/facility-services" component={FACILITYSERVICES} />


              {/* FORMS ROUTES */}

              <Route exact path="/daily-attendance-register" component={DailyAttendanceForm}/>

              <Route exact path="/add-birth-register" component={BirthRegisterForm}/>

              <Route exact path="/add-phc-staff" component={PhcStaffForm}/>

              <Route exact path="/add-referal-out" component={ReferalOutForm}/>

              <Route exact path="/add-community-leader" component={CommunityLeaderForm}/>

              <Route exact path="/add-antenatal" component={AntenatalForm}/>

              <Route  exact path="/add-tetanus" component={TetanusDiphtherialForm}/>

              <Route exact path="/add-nutrition" component={NutritionForm}/>

              <Route exact path="/add-outpatient" component={OutPatientForm}/>

              <Route path="/add-family-planning" component={FamilyPlanningForm}/>

              <Route path="/add-in-patient" component={InPatientForm}/>

              <Route path="/add-labour-delivery" component={LabourAndDeliveryForm}/>

              <Route path="/add-post-natal" component={PostNatalForm}/>

              <Route path="/add-immunization" component={ImmunizationForm}/>


            </Switch>
          </div>
        </div>
        <div className="display-type" />
      </div>
    );
  }
}
