import React from 'react';
import { Link } from 'react-router-dom';
import { image } from '../../img/logobase';

const SideBar = (props) => (
  <>
    {/*------------------
        END - Mobile Menu
        ------------------*/}
    {/*------------------
        START - Main Menu
        ------------------*/}
    <div className="menu-w color-scheme-light color-style-transparent menu-position-side menu-side-left menu-layout-compact sub-menu-style-over sub-menu-color-bright selected-menu-color-light menu-activated-on-hover menu-has-selected-link">
      <div className="logo-w">
        <img src={image} />
      </div>

      <h5 style={{ textAlign: 'center', marginTop: '10px' }}>
        {props.phc_name}
      </h5>

      <h1 className="menu-page-header text-dark">Page Header</h1>
      <ul className="main-menu">
        <li className="selected ">
          <Link to="/dashboard">
            <div className="icon-w">
              <div className="os-icon os-icon-bar-chart-up" />
            </div>

            <span>Dashboard</span>
          </Link>
        </li>

        <li className="selected ">
          <Link to="/daily-attendance">
            <div className="icon-w">
              <div className="os-icon os-icon-ui-55" />
            </div>

            <span>Daily Attendance</span>
          </Link>
        </li>

        <li className=" has-sub-menu">
          <a>
            <div className="icon-w">
              <div className="os-icon os-icon-package" />
            </div>
            <span>Interventions</span>
          </a>
          <div className="sub-menu-w font-weight-bold">
            <div className="sub-menu-header text-center text-white">
              Interventions
            </div>
            <div className="sub-menu-icon">
              <i className="os-icon os-icon-layers" />
            </div>
            <div className="sub-menu-i">
              <ul className="sub-menu">
                <li>
                  <Link to="/antenatal-care">Antenatal </Link>
                </li>
                <li>
                  <Link to="family-planing">Family Planing</Link>
                </li>
                <li>
                  <Link to="in-patient">In Patient</Link>
                </li>
                <li>
                  <Link to="labour-and-delivery">Labour & Delivery</Link>
                </li>
                <li>
                  <Link to="post-natal">Post Natal Care</Link>
                </li>
              </ul>

              <ul className="sub-menu">
                <li>
                  <Link to="/child-immunization">Child Immunization </Link>
                </li>
                <li>
                  <Link to="out-patient">Out Patient</Link>
                </li>
                <li>
                  <Link to="nutrition">Nutrition</Link>
                </li>
                <li>
                  <Link to="tetanus-diphtherial">Tetanus Diphtheria</Link>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li className="selected ">
          <Link to="/clients">
            <div className="icon-w">
              <div className="os-icon os-icon-ui-55" />
            </div>

            <span>Clients</span>
          </Link>
        </li>

        <li className="selected ">
          <Link to="birth-register">
            <div className="icon-w">
              <div className="os-icon os-icon-file-text" />
            </div>

            <span>Birth Register</span>
          </Link>
        </li>

        {props.isAdmin ? (
          <li className="selected ">
            <Link to="/phc-staff">
              <div className="icon-w">
                <div className="os-icon os-icon-file-text" />
              </div>

              <span>PHC Staff</span>
            </Link>
          </li>
        ) : null}
        <li className="selected ">
          <Link to="/referal-out">
            <div className="icon-w">
              <div className="os-icon os-icon-file-text" />
            </div>

            <span>NHIS Referal Out</span>
          </Link>
        </li>

        <li className="sub-header">
          <span>Monthly Summaries</span>
        </li>

        <li className="selected ">
          <Link to="/vaccine-utilization">
            <div className="icon-w">
              <div className="os-icon os-icon-ui-55" />
            </div>

            <span>Vaccine Utilization</span>
          </Link>
        </li>

        <li className="selected ">
          <Link to="/device-utilization">
            <div className="icon-w">
              <div className="os-icon os-icon-ui-55" />
            </div>

            <span>Device Utilization</span>
          </Link>
        </li>

        <li className="selected ">
          <Link to="/doses-discarded">
            <div className="icon-w">
              <div className="os-icon os-icon-ui-55" />
            </div>

            <span>Doses Discarded</span>
          </Link>
        </li>

        <li className="selected ">
          <Link to="equipments">
            <div className="icon-w">
              <div className="os-icon os-icon-file-text" />
            </div>

            <span>Equipments</span>
          </Link>
        </li>

        <li className="selected ">
          <Link to="immunizationRi">
            <div className="icon-w">
              <div className="os-icon os-icon-file-text" />
            </div>

            <span>Immunization RI</span>
          </Link>
        </li>

        <li className="selected ">
          <Link to="immunizationAefi">
            <div className="icon-w">
              <div className="os-icon os-icon-file-text" />
            </div>

            <span>Immunization AEFI</span>
          </Link>
        </li>

        <li className="sub-header">
          <span>Others</span>
        </li>

        {/* <li className="selected ">
              <Link to="all-users">
                <div className="icon-w">
                  <div className="os-icon os-icon-file-text" />
                </div>

                <span>All Users</span>
              </Link>
            </li> */}

        {/* <li className="selected ">
              <Link to="covid-19">
                <div className="icon-w">
                  <div className="os-icon os-icon-file-text" />
                </div>

                <span>Covid-19</span>
              </Link>
            </li> */}

        {props.isAdmin ? (
          <li className="selected ">
            <Link to="community-leaders">
              <div className="icon-w">
                <div className={`os-icon os-icon-file-text`} />
              </div>

              <span>Community Leaders</span>
            </Link>
          </li>
        ) : null}

        <li className="selected ">
          <Link to="facility-services">
            <div className="icon-w">
              <div className="os-icon os-icon-file-text" />
            </div>

            <span>Facility Services</span>
          </Link>
        </li>

        <li onClick={() => props.logout()} className="selected ">
          <Link to="#">
            <div className="icon-w">
              <div className="os-icon os-icon-file-text" />
            </div>

            <span>Logout</span>
          </Link>
        </li>

        <div style={{ marginBottom: '250px' }}></div>
      </ul>
    </div>
  </>
);

export default SideBar;
