import React, { useState, useRef } from "react";
import { Formik, Field } from "formik";
import Dropzone from "react-dropzone";
import { useMutation } from "@apollo/react-hooks";
import { ADD_OR_EDIT_KITCHEN_MUTATION } from "../../../helpers/gql";
import _ from "lodash";
import { BASE_URL } from "../../../utilities/config";
import { kitchenValidationSchema } from "../../../utilities/validationSchema";
import { Error } from "../../Error";

interface KitchenProps {
  id: string;
  imagePath: string;
  status: boolean;
  popular: boolean;
  description: string;
  kitchenName: string;
}

interface Props {
  values: KitchenProps;
  addOrEditKitchen: Function;
}

const Form: React.SFC<Props> = (props) => {
  const dismissBtn = useRef<HTMLButtonElement>(null);
  const [preview, setPreview] = useState<any>(null);

  const addKitchen = async (values: KitchenProps, actions: any) => {
    actions.setSubmitting(true);
    await props.addOrEditKitchen({ variables: values }).finally(() => {
      dismissBtn!.current!.click();
    });
    actions.resetForm();
    setPreview(null);
    actions.setSubmitting(false);
  };

  return (
    <div
      className="modal fade bs-caroussel-modal tabindex= show"
      role="dialog"
      aria-labelledby="myExtraLargeModalLabel"
      aria-modal="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title mt-0" id="myExtraLargeModalLabel">
              Add new kitchen
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              ref={dismissBtn}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <Formik
            enableReinitialize
            initialValues={props.values}
            validationSchema={kitchenValidationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              values.id = props.values.id;
              return addKitchen(values, { setSubmitting, resetForm });
            }}
          >
            {({
              handleSubmit,
              setFieldValue,
              touched,
              errors,
              isSubmitting,
            }) => (
              <form className="form-horizontal" onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <h4 className="mt-0 header-title">Cuisine</h4>
                      <br />
                      <label>Cuisine Photo</label>
                      <div className="form-group">
                        <Dropzone
                          accept="image/*"
                          multiple={false}
                          onDrop={(acceptedFiles) => {
                            setFieldValue("image", acceptedFiles[0]);
                            setPreview(URL.createObjectURL(acceptedFiles[0]));
                          }}
                        >
                          {({ getRootProps, getInputProps }) => (
                            <section>
                              <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <div className="dropzone d-flex justify-content-center align-items-center">
                                  {preview
                                    ? ""
                                    : props.values.imagePath
                                    ? ""
                                    : "Drag an image here"}
                                  {preview ? (
                                    <img
                                      src={preview}
                                      style={{ width: "100%" }}
                                    />
                                  ) : (
                                    props.values.imagePath && (
                                      <img
                                        src={BASE_URL + props.values.imagePath}
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

                      <button
                        type="submit"
                        className="btn btn-success mr-1 waves-effect waves-light"
                      >
                        {isSubmitting ? "Loading... " : "Save Changes"}
                      </button>
                    </div>
                    <div className="col-lg-6">
                      <div className="card-body">
                        <div className="form-group">
                          <label>Kitchen name</label>
                          {touched.kitchenName && (
                            <Error
                              touched={touched.kitchenName}
                              message={errors.kitchenName}
                            />
                          )}
                          <Field
                            type="text"
                            className="form-control"
                            name="kitchenName"
                          />
                        </div>

                        <div className="form-group">
                          <label>Description</label>
                          {touched.description && (
                            <Error
                              touched={touched.description}
                              message={errors.description}
                            />
                          )}
                          <Field
                            component="textarea"
                            className="form-control"
                            name="description"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Form;
