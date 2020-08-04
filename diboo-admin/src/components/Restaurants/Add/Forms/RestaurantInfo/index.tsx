import React, { useState } from "react";
import { Field } from "formik";
import Dropzone from "react-dropzone";
import { Switch } from "@material-ui/core";

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
  editValues: any;
}
const RestaurantInfoForm: React.FunctionComponent<Props> = (props) => {
  const [switchs, setSwitchs] = useState({
    delivery: false,
    pickUp: false,
    dineIn: false,
  });
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
              props.setFieldValue("image", acceptedFiles[0]);
              props.setPreview(URL.createObjectURL(acceptedFiles[0]));
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <div
                    className="dropzone d-flex justify-content-center align-items-center"
                    style={{ width: "100%" }}
                  >
                    {props.preview
                      ? ""
                      : props.imagePath
                      ? ""
                      : "Drag an image here"}
                    {props.preview ? (
                      <img
                        src={props.preview}
                        style={{ width: "100%" }}
                        alt="img"
                      />
                    ) : (
                      props.imagePath && (
                        <img
                          alt="img"
                          src={"http://localhost:3005/" + props.imagePath}
                          style={{ width: "100%" }}
                        />
                      )
                    )}
                  </div>
                </div>
              </section>
            )}
          </Dropzone>
        </div>
        <div className="form-group">
          <label> About </label>
          <Field
            component="textarea"
            className="form-control"
            name="about"
            placeholder={props.editValues.about}
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
              value={switchs.delivery}
              onClick={() => {
                props.setFieldValue("delivery", !switchs.delivery);
                setSwitchs({ ...switchs, delivery: !switchs.delivery });
              }}
            />
          </div>

          <div className="form-group">
            <label>Pick up</label>
            <Field
              name="pickUp"
              component={Switch}
              value={switchs.pickUp}
              onClick={() => {
                props.setFieldValue("pickUp", !switchs.pickUp);
                setSwitchs({ ...switchs, pickUp: !switchs.pickUp });
              }}
            />
          </div>

          <div className="form-group">
            <label>Dine in</label>
            <Field
              name="dineIn"
              component={Switch}
              value={switchs.dineIn}
              onClick={() => {
                props.setFieldValue("dineIn", !switchs.dineIn);
                setSwitchs({ ...switchs, dineIn: !switchs.dineIn });
              }}
            />
          </div>
          <div className="form-group">
            <label>Estimated delivery time</label>
            <Field
              type="textarea"
              className="form-control"
              name="estimatedDeliveryTime"
              style={{ width: 479 }}
              placeholder={props.editValues.estimatedTime}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfoForm;
