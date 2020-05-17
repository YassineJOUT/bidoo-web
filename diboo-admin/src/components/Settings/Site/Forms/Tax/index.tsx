import React, { Component } from "react";
class TaxForm extends Component {
  render = () => {
    return (
      <form>
        <div className="row">
          <div className="col-lg-6">
            <h4 className="mt-0 header-title">Tax</h4>
            <p className="text-muted mb-4">Fill all information below</p>

            <div className="form-group">
              <label>Tax in %</label>
              <input
                id="metakeywords"
                name="tax"
                type="text"
                className="form-control"
              />
            </div>
            <button
              type="submit"
              className="btn btn-success mr-1 waves-effect waves-light"
            >
              Save Changes
            </button>
          </div>
        </div>
      </form>
    );
  };
}

export default TaxForm;
