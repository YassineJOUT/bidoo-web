import React, { Component, useState, useEffect } from "react";
import Title from "../../Shared/ContentTitle";
import BreadCrumb from "../../Shared/BreadCrumb";
import ContactInfoForm from "./Forms/ContactInfo";
import RestaurantInfoForm from "./Forms/RestaurantInfo";
import CommissionForm from "./Forms/Commission";
import { Formik } from "formik";

const AddRestaurantContainer: React.FunctionComponent = () => {
  const changeLevel = () => {
    level === 3 ? setLevel(1) : setLevel(level + 1);
  };
  const [level, setLevel] = useState(1);
  useEffect(() => {
    console.log(level);
  });
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => console.log("submitted")}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
      }) => (
        <form className="form-horizontal" onSubmit={handleSubmit}>
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
                            onClick={() => setLevel(1)}
                            className={
                              level === 1 ? "nav-link active" : "nav-link"
                            }
                            data-toggle="tab"
                            href="#home"
                            role="tab"
                            aria-selected="true"
                          >
                            <span className="d-block d-sm-none">
                              <i className="fas fa-home"></i>
                            </span>
                            <span className="d-none d-sm-block">
                              Contact info
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            onClick={() => setLevel(2)}
                            className={
                              level === 2 ? "nav-link active" : "nav-link"
                            }
                            data-toggle="tab"
                            href="#profile"
                            role="tab"
                            aria-selected="false"
                          >
                            <span className="d-block d-sm-none">
                              <i className="far fa-user"></i>
                            </span>
                            <span className="d-none d-sm-block">
                              Restaurant info
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            onClick={() => setLevel(3)}
                            className={
                              level === 3 ? "nav-link active" : "nav-link"
                            }
                            data-toggle="tab"
                            href="#messages"
                            role="tab"
                            aria-selected="false"
                          >
                            <span className="d-block d-sm-none">
                              <i className="far fa-envelope"></i>
                            </span>
                            <span className="d-none d-sm-block">
                              Commission
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div
                          className={
                            level === 1 ? "tab-pane p-3 active" : "tab-pane p-3"
                          }
                          id="home"
                          role="tabpanel"
                        >
                          <div className="row">
                            <div className="col-lg-6">
                              <h4 className="mt-0 header-title">
                                Restaurant contact info
                              </h4>
                              <div className="form-group">
                                <label>Restaurant name</label>
                                <input
                                  id="metakeywords"
                                  name="city"
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                              <div className="form-group">
                                <label>Restaurant website</label>
                                <input
                                  id="metakeywords"
                                  name="city"
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                              <div className="form-group">
                                <label>Restaurant phone</label>
                                <input
                                  id="metakeywords"
                                  name="restaurantphone"
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                              <div className="form-group">
                                <label>Post code</label>
                                <input
                                  id="metakeywords"
                                  name="postcode"
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <h4 className="mt-0 header-title ">
                                <br />
                              </h4>
                              <div className="form-group">
                                <label>Email</label>
                                <input
                                  id="metakeywords"
                                  name="email"
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                              <div className="form-group">
                                <label>Address</label>
                                <input
                                  id="metakeywords"
                                  name="address"
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                              <div className="form-group">
                                <label>City</label>
                                <input
                                  id="metakeywords"
                                  name="city"
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={
                            level === 2 ? "tab-pane p-3 active" : "tab-pane p-3"
                          }
                          id="profile"
                          role="tabpanel"
                        >
                          <div className="row">
                            <div className="col-lg-6">
                              <h4 className="mt-0 header-title">
                                Restaurant info
                              </h4>
                              <br />
                              <label>Restaurant logo</label>
                              <div className="form-group">
                                <div className="bootstrap-filestyle input-group">
                                  <span className="group-span-filestyle ">
                                    <label className="btn btn-secondary ">
                                      <span className="icon-span-filestyle fas fa-folder-open"></span>
                                      <span className="buttonText">
                                        Choose a file
                                      </span>
                                    </label>
                                  </span>
                                </div>
                                <div className="form-group">
                                  Recommended size 100 * 100
                                  <br />
                                  <img
                                    className="rounded mr-2"
                                    alt="200x200"
                                    width="150"
                                    src="../assets/images/thumbnail-default.jpg"
                                    data-holder-rendered="true"
                                  />
                                </div>
                                <div className="form-group">
                                  <label> About </label>
                                  <textarea
                                    className="form-control"
                                    id="metadescription"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="card-body">
                                <div className="form-group">
                                  <label>Delivery</label>
                                  <br />
                                  <input type="checkbox" id="switch1" />
                                  <label
                                    data-on-label="On"
                                    data-off-label="Off"
                                  ></label>
                                </div>

                                <div className="form-group">
                                  <label>Pick up</label>
                                  <br />
                                  <input type="checkbox" id="switch2" />
                                  <label
                                    data-on-label="On"
                                    data-off-label="Off"
                                  ></label>
                                </div>

                                <div className="form-group">
                                  <label>Dine in</label>
                                  <br />
                                  <input type="checkbox" id="switch3" />
                                  <label
                                    data-on-label="On"
                                    data-off-label="Off"
                                  ></label>
                                </div>

                                <div className="form-group">
                                  <label>Estimated delivery time</label>
                                  <input
                                    id="metakeywords"
                                    name="deliverytime"
                                    type="text"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className={
                            level === 3 ? "tab-pane p-3 active" : "tab-pane p-3"
                          }
                          id="messages"
                          role="tabpanel"
                        >
                          <div className="row">
                            <div className="col-lg-6">
                              <h4 className="mt-0 header-title">Commission</h4>
                              <p className="text-muted mb-4">
                                Fill all information below
                              </p>

                              <div className="form-group">
                                <label>Commission %</label>
                                <input
                                  id="metakeywords"
                                  name="tax"
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <input
                        type="button"
                        onClick={() => changeLevel()}
                        className="btn btn-primary mr-1 waves-effect waves-light"
                        value={level !== 3 ? "next" : "first"}
                      />
                      <input
                        type="submit"
                        className="btn btn-success mr-1 waves-effect waves-light "
                        style={{ display: level !== 3 ? "none" : "" }}
                        value="submit"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default AddRestaurantContainer;
