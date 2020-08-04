import React from "react";
import { Field } from "formik";

interface Props {
  restaurantName: string;
  restaurantWebsite: string;
  restaurantPhone: string;
  postCode: string;
  email: string;
  address: string;
  city: string;
  editValues: any;
}

const ContactInfoForm: React.FunctionComponent<Props> = (props) => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <h4 className="mt-0 header-title">Restaurant contact info</h4>
        <div className="form-group">
          <label>Restaurant name</label>
          <Field
            type="text"
            className="form-control"
            name="restaurantName"
            placeholder={props.editValues.name}
          />
        </div>
        <div className="form-group">
          <label>Restaurant website</label>
          <Field
            type="text"
            className="form-control"
            name="restaurantWebsite"
            placeholder={props.editValues.website}
          />
        </div>
        <div className="form-group">
          <label>Restaurant phone</label>
          <Field
            type="text"
            className="form-control"
            name="restaurantPhone"
            placeholder={props.editValues.phone}
          />
        </div>
        <div className="form-group">
          <label>Post code</label>
          <Field
            type="text"
            className="form-control"
            name="postCode"
            placeholder={props.editValues.postCode}
          />
        </div>
      </div>
      <div className="col-lg-6">
        <h4 className="mt-0 header-title ">
          <br />
        </h4>
        <div className="form-group">
          <label>Email</label>
          <Field
            type="text"
            className="form-control"
            name="email"
            placeholder={props.editValues.email}
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <Field
            type="text"
            className="form-control"
            name="address"
            placeholder={props.editValues.address}
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <Field
            type="text"
            className="form-control"
            name="city"
            placeholder={props.editValues.city}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfoForm;
