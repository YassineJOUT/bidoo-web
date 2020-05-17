import React, { Component } from "react";
import Title from "../../Shared/ContentTitle";
import BreadCrumb from "../../Shared/BreadCrumb";
import CommissionForm from "./Forms";

class CommissionSettingsContainer extends Component {
  render = () => {
    return (
      <div>
        <div className="page-title-box">
          <div className="row">
            
            <Title title="Commission Setting">
              <BreadCrumb title={"Commission Settings"} url="/home" />
            </Title>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card mini-stat ">
              <div className="card-body mini-stat-img">
                <CommissionForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default CommissionSettingsContainer;
