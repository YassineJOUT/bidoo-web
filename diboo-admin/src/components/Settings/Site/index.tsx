import React, { Component, useState } from "react";
import Title from "../../Shared/ContentTitle";
import BreadCrumb from "../../Shared/BreadCrumb";
import SiteForm from "./Forms/Site";
import ContactInfoForm from "./Forms/ContactInfo";
import LocationForm from "./Forms/Location";
import TaxForm from "./Forms/Tax";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  GET_SITE_SETTING_MUTATION,
  EDIT_SITESETTING_MUTATION,
} from "../../../helpers/gql";
import Alert from "../../Shared/Alert";
const contactInfoIntialValues = {
  id: "",
  supportEmail: "",
  adminEmail: "",
  sitePhone: "",
  invoiceEmail: "",
};
const locationIntialValues = {
  id: "",
  address: "",
  city: "",
  postCode: "",
  country: "",
};
const taxIntialValues = {
  id: "",
  tax: 0,
};
const siteInitialValues = {
  id: "",
  siteName: "",
  headerText: "",
  facebook: "",
  twitter: "",
  youtube: "",
  instagram: "",
  siteMetaTagTitle: "",
  siteMetaTagKeyword: "",
  siteMetaTagDescription: "",
};
const SiteSettingContainer: React.FunctionComponent = () => {
  // alert state
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: "",
    type: true,
  });
  //handle alert
  const handlAlert = (show: boolean, message: string, type: boolean) => {
    setShowAlert({ show, message, type });
    setTimeout(() => {
      setShowAlert({ show: false, message: "", type: true });
    }, 2000);
    // refetch();
  };
  // edit values mutation

  const [
    editSettingMutation,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(EDIT_SITESETTING_MUTATION, {
    onCompleted: (data) => {
      const { ok, message, error } = data.updateSiteSetting;
      handlAlert(true, ok ? message : error, ok);
      // refetch();
    },
    onError: (err) => console.log(err),
  });
  const { refetch, loading, data } = useQuery(GET_SITE_SETTING_MUTATION, {
    onCompleted: (data) => {
      // console.log(data);
    },
  });

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
                {!loading ? (
                  <div className="tab-content">
                    <div
                      className="tab-pane p-3 active"
                      id="home"
                      role="tabpanel"
                    >
                      <SiteForm
                        data={
                          data && data.getSetting && data.getSetting.ok
                            ? data.getSetting.data
                            : siteInitialValues
                        }
                        editSetting={editSettingMutation}
                      />
                    </div>
                    <div className="tab-pane p-3" id="profile" role="tabpanel">
                      <ContactInfoForm
                        data={
                          data && data.getSetting && data.getSetting.ok
                            ? data.getSetting.data
                            : contactInfoIntialValues
                        }
                        editSetting={editSettingMutation}
                      />
                    </div>
                    <div className="tab-pane p-3" id="messages" role="tabpanel">
                      <LocationForm
                        data={
                          data && data.getSetting && data.getSetting.ok
                            ? data.getSetting.data
                            : locationIntialValues
                        }
                        editSetting={editSettingMutation}
                      />
                    </div>
                    <div className="tab-pane p-3" id="settings" role="tabpanel">
                      <TaxForm
                        data={
                          data && data.getSetting && data.getSetting.ok
                            ? data.getSetting.data
                            : taxIntialValues
                        }
                        editSetting={editSettingMutation}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="d-flex justify-content-center">
                    <div className="spinner-border "></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showAlert.show && (
        <Alert message={showAlert.message} type={showAlert.type} />
      )}
    </div>
  );
};

export default SiteSettingContainer;
