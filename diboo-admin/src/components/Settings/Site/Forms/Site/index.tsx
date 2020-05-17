import React, { Component } from "react";

class SiteForm extends Component {
  render = () => {
    return (
      <form>
        {" "}
        <div className="row">
          <div className="col-lg-6">
            <h4 className="mt-0 header-title">General info</h4>
            <p className="text-muted mb-4">Fill all information below</p>

            <div className="form-group">
              <label>Website name</label>
              <input
                id="metatitle"
                name="websitename"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Header title</label>
              <input
                id="metatitle"
                name="headertitle"
                type="text"
                className="form-control"
              />
            </div>

            <h4 className="mt-0 header-title">Social media</h4>
            <div className="form-group">
              <label>Facebook</label>
              <input
                id="metatitle"
                name="facebook"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Instagram</label>
              <input
                id="metatitle"
                name="instagram"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Twitter</label>
              <input
                id="metatitle"
                name="twitter"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Youtube</label>
              <input
                id="metatitle"
                name="youtube"
                type="text"
                className="form-control"
              />
            </div>

          
          </div>
          <div className="col-lg-6">
            <h4 className="mt-0 header-title">SEO</h4>

            <div className="form-group">
              <label>Meta title</label>
              <input
                id="metatitle"
                name="productname"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Meta Keywords</label>
              <input
                id="metakeywords"
                name="manufacturername"
                type="text"
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label>Meta Description</label>
              <textarea
                className="form-control"
                id="metadescription"
              ></textarea>
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

export default SiteForm;
