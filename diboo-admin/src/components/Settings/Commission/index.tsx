import React, { Component, useState, useEffect } from "react";
import Title from "../../Shared/ContentTitle";
import BreadCrumb from "../../Shared/BreadCrumb";
import CommissionForm from "./Forms";
import { data } from "../../../FakeDB/guestOrders";
import { useQuery } from "@apollo/react-hooks";
import { GET_COMMISSION_SETTING_MUTATION } from "../../../helpers/gql";

const CommissionSettingsContainer: React.FunctionComponent = () => {

  

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
              <CommissionForm  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommissionSettingsContainer;
