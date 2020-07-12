import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { Field } from "formik";

class ContactInfoForm extends React.Component<
{ restaurantName: string,
  restaurantWebsite: string,
  restaurantPhone: string,
  postCode: string,
  email: string,
  address: string,
  city: string,
}
  >
  {
  constructor(props: any) {
    super(props);
  } 

  render = () => {
    return (

        <div className="row" >
          <div className="col-lg-6">
            <h4 className="mt-0 header-title">Restaurant contact info</h4>
            <div className="form-group">
              <label>Restaurant name</label>
              <Field
                type="text"
                className="form-control"
                name="restaurantName"
              />
            </div>
            <div className="form-group">
              <label>Restaurant website</label>
              <Field
                type="text"
                className="form-control"
                name="restaurantWebsite"
              />
            </div>
            <div className="form-group">
              <label>Restaurant phone</label>
              <Field
                type="text"
                className="form-control"
                name="restaurantPhone"
              />
               </div>
            <div className="form-group">
              <label>Post code</label>
               <Field
                type="text"
                className="form-control"
                name="postCode"
              />
            </div>
            
          </div>
          <div className="col-lg-6">
          <h4 className="mt-0 header-title "><br/></h4>
            <div className="form-group">
              <label>Email</label>
              <Field
                type="text"
                className="form-control"
                name="email"
              /> 
            </div>
            <div className="form-group">
              <label>Address</label>
              <Field
                type="text"
                className="form-control"
                name="address"
              />
            </div>
            <div className="form-group">
              <label>City</label>
              <Field
                type="text"
                className="form-control"
                name="city"
              />
            </div>
          </div>
        </div>
     
    ); 
  };
}

export default ContactInfoForm;
