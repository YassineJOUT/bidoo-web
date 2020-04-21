import React, { Component } from "react";

class LocationForm extends Component {
  render = () => {
    return (
      <form>
        <div className="row">
          <div className="col-lg-6">
            <h4 className="mt-0 header-title">Location</h4>
            <p className="text-muted mb-4">Fill all information below</p>
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
          <div className="col-lg-6">
            <div className="form-group">
              <label>Country</label>
              <input
                id="metakeywords"
                name="country"
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
        </div>
        <button
          type="submit"
          className="btn btn-success mr-1 waves-effect waves-light"
        >
          Save Changes
        </button>
      </form>
    );
  };
}

export default LocationForm;
