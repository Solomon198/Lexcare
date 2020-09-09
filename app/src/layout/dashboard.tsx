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
import COMMUNITYLEADERS from "./communityLeaders";
import FACILITYSERVICES from "./facilityServices";
import Login from '../layout/login'
import Realm from 'realm'

import electron from 'electron';

// FORMS FOR INTERVENITONS

import DailyAttendanceForm from '../Forms/dailyAttendance'
import BirthRegisterForm from '../Forms/birthRegister'
import PhcStaffForm from '../Forms/phcStaff'


export default class Dashboard extends React.Component {

  componentDidMount(){

  }


  render() {




    return (
      <div className="all-wrapper with-side-panel solid-bg-all">
        <div className="layout-w">
          {/*------------------
                 DASHBOARD SIDEBAR
                ------------------*/}

          <SideBar logout={()=>this.props.logout()}/>

          {/*------------------
                  MAIN CONTENT VIEW
                ------------------*/}
          <div className="content-w">
            <Switch>
              {/* MAIN ROUTES */}

              <Route exact path="/">
                <DashboardDefault />
              </Route>
              <Route path="/dashboard">
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
              <Route exact path="/community-leaders" component={COMMUNITYLEADERS} />
              <Route exact path="/facility-services" component={FACILITYSERVICES} />


              {/* FORMS ROUTES */}

              <Route path="/daily-attendance-register" component={DailyAttendanceForm}/>

              <Route path="/add-birth-register" component={BirthRegisterForm}/>

              <Route path="/add-phc-staff" component={PhcStaffForm}/>


            </Switch>
          </div>
        </div>
        <div className="display-type" />
      </div>
    );
  }
}
