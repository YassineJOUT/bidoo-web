import React, { Component, useState } from "react";
import { Field } from "formik";
import Dropzone from "react-dropzone";
import { Switch, FormControlLabel } from "@material-ui/core";
interface variables{

}
interface Props {
  restaurantLogo: string;
  about: string;
  delivery: boolean;
  pickUp: boolean;
  dineIn: boolean;
  estimatedDeliveryTime: string;
  imagePath: string;
  preview: any;
  setPreview: Function;
  setFieldValue: Function;
  handleChange: Function;
  editValues: any
}
class RestaurantInfoForm extends React.Component<
Props
  >
  {
  constructor(props: any) {
    super(props);
  } 
  render = () => {
    return (
  
        <div className="row">
        <div className="col-lg-6">
                      <h4 className="mt-0 header-title">Restaurant info</h4>
                      <br />
                      <label>Restaurant logo</label>

                      <div className="form-group">
                        Recommended size ( 1903 x 969 )
                        <br />
                        <Dropzone
                          accept="image/*"
                          multiple={false}
                          onDrop={(acceptedFiles) => {
                            this.props.setFieldValue("image", acceptedFiles[0]);
                            this.props.setPreview(URL.createObjectURL(acceptedFiles[0]));
                          }}
                        >
                          {({ getRootProps, getInputProps }) => (
                            <section>
                              <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <div className="dropzone d-flex justify-content-center align-items-center"  style={{ width: 400 }}>
                                  {this.props.preview ? "" : this.props.imagePath ? "" :"Drag an image here"}
                                  {this.props.preview ? (
                                    <img
                                      src={this.props.preview}
                                      style={{ width: "100%" }}
                                    />
                                  ) : (this.props.imagePath &&
                                    <img
                                      src={"http://localhost:3005/"+ this.props.imagePath }
                                      style={{ width: "100%" }}
                                    /> 
                                    )
                                  }
                                </div>
                              </div>
                            </section>
                          )}
                        </Dropzone>
                      </div>
              <div className="form-group">
                <label> About </label>
                <Field
                componentClass="textarea"
                className="form-control"
                name="about"
                style={{ width: 500 , rows: 3 , cols : 80}}
                placeholder={this.props.editValues.about}
              />
              </div>
        </div>
      
          <div className="col-lg-6">
            <div className="card-body">
            <div className="form-group">
               <label>Delivery</label>
             
                 <Field 
                           name="delivery"
                           component={Switch}
                           onChange={this.props.handleChange}
                          // checked={this.props.delivery} 
                           value={this.props.delivery}
                           placeholder={this.props.editValues.delivery}
                          />     
               
              </div>

              <div className="form-group">
                <label>Pick up</label>
                <Field
                           name="pickUp"
                           component={Switch}
                           checked={this.props.pickUp} 
                          />   
              </div>

              <div className="form-group">
                <label>Dine in</label>
               <Field
                           name="dineIn"
                           component={Switch}
                           checked={this.props.dineIn} 
                          />
              </div>	  
              <div className="form-group">
                <label>Estimated delivery time</label>
                <Field
                type="textarea"
                className="form-control"
                name="estimatedDeliveryTime"
                style={{ width: 479 }}
                placeholder={this.props.editValues.estimatedTime}
              />
              </div>
            </div>
          </div>
      
          </div>
    ); 
  };
}

export default RestaurantInfoForm;
