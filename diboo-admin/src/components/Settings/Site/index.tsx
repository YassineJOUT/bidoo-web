import React, { Component } from "react";
import Title from "../../Shared/ContentTitle";
import BreadCrumb from "../../Shared/BreadCrumb";
import SiteForm from "./Forms/Site";
import ContactInfoForm from "./Forms/ContactInfo";
import LocationForm from "./Forms/Location";
import TaxForm from "./Forms/Tax";

class SiteSettingContainer extends Component {
  render = () => {
    return (
      <div>
        <div className="page-title-box">
          <div className="row">
            <Title title="Website Setting">
              <BreadCrumb title={"Website Settings"} url="/home" />
            </Title>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card mini-stat ">
              <div className="card-body mini-stat-img">
                <div className="table-responsive">
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-selected="true"
                      >
                        <span className="d-block d-sm-none">
                          <i className="fas fa-home"></i>
                        </span>
                        <span className="d-none d-sm-block">Site</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-selected="false"
                      >
                        <span className="d-block d-sm-none">
                          <i className="far fa-user"></i>
                        </span>
                        <span className="d-none d-sm-block">Contact info</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#messages"
                        role="tab"
                        aria-selected="false"
                      >
                        <span className="d-block d-sm-none">
                          <i className="far fa-envelope"></i>
                        </span>
                        <span className="d-none d-sm-block">Location</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="tab"
                        href="#settings"
                        role="tab"
                        aria-selected="false"
                      >
                        <span className="d-block d-sm-none">
                          <i className="fas fa-cog"></i>
                        </span>
                        <span className="d-none d-sm-block">Tax</span>
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      className="tab-pane p-3 active"
                      id="home"
                      role="tabpanel"
                    >
                      <SiteForm />
                    </div>
                    <div className="tab-pane p-3" id="profile" role="tabpanel">
                      <ContactInfoForm />
                    </div>
                    <div className="tab-pane p-3" id="messages" role="tabpanel">
                      <LocationForm />
                    </div>
                    <div className="tab-pane p-3" id="settings" role="tabpanel">
                      <TaxForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default SiteSettingContainer;