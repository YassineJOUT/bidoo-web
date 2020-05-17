import React, { Component } from "react";

class ContactInfoForm extends Component {
  render = () => {
    return (
      <form>
        <div className="row">
          <div className="col-lg-6">
            <h4 className="mt-0 header-title">Restaurant contact info</h4>
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
          <h4 className="mt-0 header-title "><br/></h4>
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

export default ContactInfoForm;
