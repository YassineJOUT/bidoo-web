import React, { useState, useRef } from "react";
import { Formik, Field } from "formik";
import Dropzone from "react-dropzone";
import _ from "lodash";

export interface CategoryProps {
  categoryName: string;
  id: string;
  imagePath: string;
  status: boolean;
  description: string;
}

interface Props {
  values: CategoryProps;
  addOrEditCategory: Function;
}

const Form: React.SFC<Props> = (props) => {
  const dismissBtn = useRef<HTMLButtonElement>(null);
  const [preview, setPreview] = useState<any>(null);

  const addOrEditCategory = (values: CategoryProps, actions: any) => {
    props.addOrEditCategory({ variables: values }).finally(() => {
      dismissBtn!.current!.click();
      actions.resetForm();
      setPreview(null);
    });
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
              Add new category
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
            //   validationSchema={loginValidationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              values.id = props.values.id;
              return addOrEditCategory(values, { setSubmitting, resetForm });
            }}
          >
            {({ handleSubmit, setFieldValue, isSubmitting }) => (
              <form className="form-horizontal" onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <h4 className="mt-0 header-title">Menu Category</h4>
                      <br />
                      <label>Category Photo</label>

                      <div className="form-group">
                        Recommended size ( 1903 x 969 )
                        <br />
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
                                        src={
                                          "http://localhost:3005/" +
                                          props.values.imagePath
                                        }
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
                        Save Changes
                      </button>
                    </div>
                    <div className="col-lg-6">
                      <div className="card-body">
                        <div className="form-group">
                          <label>Restaurant</label>
                          <select className="form-control">
                            <option>Select a restaurant</option>
                            <option>Restaurant 1</option>
                            <option>Restaurant 2</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label>Category name</label>
                          <Field
                            type="text"
                            name="categoryName"
                            className="form-control"
                          />
                        </div>

                        <div className="form-group">
                          <label>Category description</label>
                          <Field
                            component="textarea"
                            name="description"
                            className="form-control"
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
