import React, { useCallback } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { useDropzone } from "react-dropzone";
import { useMutation } from "@apollo/react-hooks";

const Form: React.SFC = () => {
 // const [uploadFile] = useMutation();
 const uploadFile = () => {
    console.log('upload');
 }
  const onDrop = useCallback(
    ([file]) => {
      uploadFile();
    },
    [uploadFile]
  );
  const addCarousel = () => {
    console.log("fired");
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
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
              Add new carousel Image
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <Formik
            initialValues={{ email: "", password: "" }}
            //   validationSchema={loginValidationSchema}
            onSubmit={(values, { setSubmitting }) => addCarousel()}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
            }) => (
              <form className="form-horizontal" onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <h4 className="mt-0 header-title">Restaurant Banner</h4>
                      <br />
                      <label>Banner photo</label>
                      <div className="form-group">
                        <div className="bootstrap-filestyle input-group">
                          <span className="group-span-filestyle ">
                            <label className="btn btn-secondary ">
                              <span className="icon-span-filestyle fas fa-folder-open"></span>{" "}
                              <span className="buttonText">Choose a file</span>
                            </label>
                          </span>
                        </div>
                      </div>
                      <div className="form-group">
                        Recommended size ( 1903 x 969 )
                        <br />
                        <div {...getRootProps()}>
                          <input {...getInputProps()} />
                          {isDragActive ? (
                            <p>Drop the files here ...</p>
                          ) : (
                            <p>
                              Drag 'n' drop some files here, or click to select
                              files
                            </p>
                          )}
                        </div>
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
                          <label>Banner title</label>
                          <Field
                            type="text"
                            className="form-control"
                            name="title"
                            placeholder="Banner title"
                          />
                          {/* <input
                            id="metakeywords"
                            name="englishTitle"
                            type="text"
                            className="form-control"
                          /> */}
                        </div>

                        <div className="form-group">
                          <label>Banner subtitle</label>
                          <Field
                            type="text"
                            name="subtitle"
                            className="form-control"
                            placeholder="Banner subtitle"
                          />
                          {/* <input
                            id="metakeywords"
                            name="frenshTitle"
                            type="text"
                            className="form-control"
                          /> */}
                        </div>

                        <div className="form-group">
                          <label>Banner hyper link</label>
                          <Field
                            type="text"
                            name="bannerLink"
                            className="form-control"
                            placeholder="Banner hyper link"
                          />

                          {/* <input
                            id="metakeywords"
                            name="hyperLink"
                            type="text"
                            className="form-control"
                          /> */}
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
