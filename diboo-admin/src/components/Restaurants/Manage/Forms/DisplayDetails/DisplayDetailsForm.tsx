import React, { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import { GET_RESTAURANT_MUTATION } from "../../../../../helpers/gql";
import _ from "lodash";
import { Switch } from "@material-ui/core";
const initialState = {
  name: "",
  website: "",
  phone: "",
  postCode: "",
  email: "",
  address: "",
  city: "",
  estimatedTime: "",
  about: "",
  delivery: false,
  pickUp: false,
  dineIn: false,
  commission: "",
  imagePath: "",
  status: true,
};

interface Props {
  Id: string;
}

const DisplayDetailsForm: React.FunctionComponent<Props> = (props) => {
  const [Values, setValues] = useState(initialState);
  const [getRestaurant] = useLazyQuery(GET_RESTAURANT_MUTATION, {
    onCompleted: (data) => {
      setValues(data.getOneRestaurant.data[0]);
    },
  });
  useEffect(() => {
    if (!_.isEmpty(props.Id)) {
      getRestaurant({ variables: { id: props.Id } });
    }
  }, [props.Id, getRestaurant]);
  function getContent(step: Number) {
    switch (step) {
      case 0:
        return (
          <div className="row">
            <div className="col-lg-6">
              <h4 className="mt-0 header-title">Restaurant contact info</h4>
              <div className="form-group">
                <label>Restaurant name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={Values.name}
                  disabled={true}
                />
              </div>
              <div className="form-group">
                <label>Restaurant website</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={Values.website}
                  disabled={true}
                />
              </div>
              <div className="form-group">
                <label>Restaurant phone</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={Values.phone}
                  disabled={true}
                />
              </div>
              <div className="form-group">
                <label>Post code</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={Values.postCode}
                  disabled={true}
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
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder={Values.email}
                  disabled={true}
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  placeholder={Values.address}
                  disabled={true}
                />
              </div>
              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  placeholder={Values.city}
                  disabled={true}
                />
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="row">
            <div className="col-lg-6">
              <h4 className="mt-0 header-title">Restaurant info</h4>
              <br />
              <label>Restaurant logo</label>

              <div className="form-group">
                Recommended size ( 1903 x 969 )
                <br />
              </div>
              <div className="form-group">
                <label> About </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={Values.about}
                  disabled={true}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card-body">
                <div className="form-group">
                  <label>Delivery</label>
                  <Switch
                    name="delivery"
                    checked={Values.delivery}
                    disabled={true}
                  />
                </div>
                <div className="form-group">
                  <label>Pick up</label>
                  <Switch
                    name="pickUp"
                    checked={Values.pickUp}
                    disabled={true}
                  />
                </div>
                <div className="form-group">
                  <label>Dine in</label>
                  <Switch
                    name="dineIn"
                    checked={Values.dineIn}
                    disabled={true}
                  />
                </div>
                <div className="form-group">
                  <label>Estimated delivery time</label>
                  <input
                    type="textarea"
                    className="form-control"
                    style={{ width: 479 }}
                    placeholder={Values.estimatedTime}
                    disabled={true}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="form-group">
            <label>Commission %</label>
            <input
              type="text"
              className="form-control"
              placeholder={Values.commission}
              disabled={true}
              style={{ width: 300 }}
            />
          </div>
        );
      default:
        return;
    }
  }
  return (
    <div className="row" style={{ width: 990 }}>
      <div className="col-lg-12">
        <div className="card mini-stat ">
          <div className="card-body mini-stat-img">
            <div className="table-responsive">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-selected="false"
                  >
                    <span className="d-block d-sm-none">
                      <i className="fas fa-home"></i>
                    </span>
                    <span className="d-none d-sm-block">Contact info</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-selected="true"
                  >
                    <span className="d-block d-sm-none">
                      <i className="far fa-user"></i>
                    </span>
                    <span className="d-none d-sm-block">Restaurant info</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#settings"
                    role="tab"
                  >
                    <span className="d-block d-sm-none">
                      <i className="fas fa-cog"></i>
                    </span>
                    <span className="d-none d-sm-block">Commission</span>
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane p-3" id="home" role="tabpanel">
                  <div className="row">{getContent(0)}</div>
                </div>
                <div
                  className="tab-pane p-3 active"
                  id="profile"
                  role="tabpanel"
                >
                  {getContent(1)}
                </div>
                <div className="tab-pane p-3" id="settings" role="tabpanel">
                  {getContent(2)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DisplayDetailsForm;
