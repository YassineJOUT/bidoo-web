import React, { Component } from "react";

class ContactInfoForm extends Component {
  render = () => {
    return (
      <form>
        <div className="row">
          <div className="col-lg-6">
            <h4 className="mt-0 header-title">Contact info</h4>
            <p className="text-muted mb-4">Fill all information below</p>

            <div className="form-group">
              <label>Contact us email</label>
              <input
                id="metakeywords"
                name="contactusemail"
                type="text"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>admin email</label>
              <input
                id="metakeywords"
                name="adminemail"
                type="text"
                className="form-control"
              />
            </div>
           
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Invoice email</label>
              <input
                id="metakeywords"
                name="invoiceemail"
                type="text"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Phone number</label>
              <input
                id="metakeywords"
                name="contactusemail"
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
