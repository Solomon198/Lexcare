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
              <Route path="/birth-register" component={BirthRegister} />
              <Route path="/clients" component={Clients} />
              <Route path="/phc-staff" component={PhcStaff} />
              <Route path="/referal-out" component={ReferalOut} />
              <Route path="/daily-attendance" component={DailyAttendance} />
              {/* INTERVENTIONS ROUTES */}

              <Route path="/antenatal-care" component={Antenatal} />
              <Route path="/child-immunization" component={ChildImunization} />
              <Route path="/out-patient" component={OutPatient} />
              <Route path="/in-patient" component={InPatient} />
              <Route
                path="/labour-and-delivery"
                component={LabourAndDelivery}
              />
              <Route
                path="/tetanus-diphtherial"
                component={TetanusDiphtherial}
              />
              <Route path="/post-natal" component={PostNatal} />
              <Route path="/family-planing" component={FamilyPlaning} />
              <Route path="/nutrition" component={Nutrition} />

              {/* OTHER ROUTES */}

              <Route path="/all-users" component={AllUsers} />
              <Route path="/covid-19" component={COVID19} />
              <Route path="/community-leaders" component={COMMUNITYLEADERS} />
              <Route path="/facility-services" component={FACILITYSERVICES} />


              {/* FORMS ROUTES */}

              <Route path="/daily-attendance-register" component={DailyAttendanceForm}/>



            </Switch>
          </div>
        </div>
        <div className="display-type" />
      </div>
    );
  }
}
