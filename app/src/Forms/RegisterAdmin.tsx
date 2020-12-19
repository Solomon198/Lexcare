import React from 'react';
import Input from '../components/input'
import SelectComponent from '../components/select'
import StepWrapper from '../components/stepWrapper'
import StepFormWrapper from '../components/stepFormWrapper';
import {image} from '../../img/logobase'

type Props = {
    history?: any,
    addStaff :any
}

class AdminStaff extends React.Component<Props> {

    state = {


    }

    componentDidMount(){

      window.scrollTo(0, 0)

    }


    render() {
        return (

            <div  className="container-fluid card">
            <div className="row no-gutter">
              <div className="col-md-12 col-lg-12">
                <div className="login d-flex align-items-center py-5 ">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12 col-lg-12 mx-auto">
                        <h3 style={{letterSpacing:3}} className="login-heading text-dark text-center">

                          <img style={{width:120,height:80}} src={image}/>

                        </h3>

             <StepFormWrapper
                 onSubmit={(values:any)=>this.props.addStaff(values)}
                 title="Register Super Admin"
                 steps={1} // holds total number of steps required
              >
                <div style={{marginTop:20}}></div>

                <StepWrapper
                  position={1} // the current step position
                  title="" // title of the step
                >

                    <Input
                    type="text"
                    placeholder="Enter full name"
                    name="full_name"
                    title="Full Name"
                    required="Please enter full name"
                    />

                    {/* Use a date picker here */}
                    <Input
                    type="text"
                    placeholder="Enter phone number"
                    name="phone_number"
                    title="Phone Number"
                    required="Please enter phone number"
                    />

                    <Input
                        type="email"
                        placeholder="Enter Email Address"
                        name="email"
                        title="Email Address"
                    />

                   <Input
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    title="Password"
                    required="Please enter password"
                    />

                    <SelectComponent

                    name="role"
                    options={["Officer in Charge"]}
                    title="Role"
                    placeholder="Select Role"
                    required="Please select a role"
                    />

                </StepWrapper>

            </StepFormWrapper>


                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div style={{minHeight:720}} className="d-none d-md-flex col-md-6 col-lg-7 bg-image "></div> */}
            </div>
          </div>
        );
    }

}

export default AdminStaff;
