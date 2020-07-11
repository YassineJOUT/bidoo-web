import React, { useState, useEffect, useRef } from "react";
import { Formik, Field } from "formik";
import Dropzone from "react-dropzone";
import { useMutation, useQuery, useLazyQuery } from "@apollo/react-hooks";
import {
  ADD_CAROUSEL_MUTATION,
  GET_CAROUSEL_MUTATION,
} from "../../helpers/gql";
import _ from "lodash";
import Alert from "../Shared/Alert";

const Form: React.SFC<{ Id: string; handlAlert: Function }> = (props) => {
  const [showAlert, setShowAlert] = useState(false);
  const dismissBtn = useRef<HTMLButtonElement>(null);
  const [Values, setValues] = useState({
    id: "",
    title: "",
    subtitle: "",
    bannerLink: "",
    image: null,
    imagePath: "",
  });
  const [preview, setPreview] = useState<any>(null);

  const [
    getCarousel
  ] = useLazyQuery(GET_CAROUSEL_MUTATION, {
    onCompleted: (data) => {
      console.log(data)
      setValues(data.getOneCarousel.data[0]);
    },
  });
  useEffect(() => {
    if (!_.isEmpty(props.Id)) {
      getCarousel({ variables: { id: props.Id } });
    }
  }, [props.Id]);

  const addCarousel = (
    values: {
      id: string;
      title: string;
      subtitle: string;
      bannerLink: string;
      image: any;
    },
    actions: any
  ) => {
    console.log("values");
    console.log(values);
    addCarouselMutation({ variables: values }).finally(() => {
      actions.resetForm();
      setPreview(null);
    });
  };
  const [
    addCarouselMutation,
    { loading: mutationLoading, error, data },
  ] = useMutation(ADD_CAROUSEL_MUTATION, {
    onCompleted: (data) => {
      dismissBtn!.current!.click();
      const { ok, message, error } = data.createCarousel;
      props.handlAlert(true, ok ? message : error,  ok );
      
    },
  });

  return (
    <div>
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
                ref={dismissBtn}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <Formik
              enableReinitialize
              initialValues={Values}
              //   validationSchema={loginValidationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                values.id = props.Id;
                return addCarousel(values, { setSubmitting, resetForm });
              }}
            >
              {({ values, handleSubmit, setFieldValue, setValues }) => (
                <form className="form-horizontal" onSubmit={handleSubmit}>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-lg-6">
                        <h4 className="mt-0 header-title">Restaurant Banner</h4>
                        <br />
                        <label>Banner photo</label>

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
                                      : Values.imagePath
                                      ? ""
                                      : "Drag an image here"}
                                    {preview ? (
                                      <img
                                        src={preview}
                                        style={{ width: "100%" }}
                                      />
                                    ) : (
                                      Values.imagePath && (
                                        <img
                                          src={
                                            "http://localhost:3005/" +
                                            Values.imagePath
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
                          {mutationLoading ? "Loading... " : "Save Changes"}
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
                          </div>

                          <div className="form-group">
                            <label>Banner subtitle</label>
                            <Field
                              type="text"
                              name="subtitle"
                              className="form-control"
                              placeholder="Banner subtitle"
                            />
                          </div>

                          <div className="form-group">
                            <label>Banner hyper link</label>
                            <Field
                              type="text"
                              name="bannerLink"
                              className="form-control"
                              placeholder="Banner hyper link"
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
    </div>
  );
};

export default Form;
