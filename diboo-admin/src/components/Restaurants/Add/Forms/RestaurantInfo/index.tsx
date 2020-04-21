import React, { Component } from "react";

class RestaurantInfoForm extends Component {
  render = () => {
    return (
      <form>
        <div className="row">
          <div className="col-lg-6">
            <h4 className="mt-0 header-title">Restaurant info</h4>
            <br />
            <label>Restaurant logo</label>
            <div className="form-group">
              <div className="bootstrap-filestyle input-group">
                <span className="group-span-filestyle ">
                  <label className="btn btn-secondary ">
                    <span className="icon-span-filestyle fas fa-folder-open"></span>
                    <span className="buttonText">Choose a file</span>
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
                <label data-on-label="On" data-off-label="Off"></label>
              </div>

              <div className="form-group">
                <label>Pick up</label>
                <br />
                <input type="checkbox" id="switch2" />
                <label data-on-label="On" data-off-label="Off"></label>
              </div>

              <div className="form-group">
                <label>Dine in</label>
                <br />
                <input type="checkbox" id="switch3" />
                <label data-on-label="On" data-off-label="Off"></label>
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

export default RestaurantInfoForm;
