import React, { useState, useEffect } from "react";
import { Formik, Field } from "formik";
import Dropzone from "react-dropzone";
import { useMutation, useQuery, useLazyQuery } from "@apollo/react-hooks";
import {
  ADD_CAROUSEL_MUTATION,
  GET_CAROUSEL_MUTATION,
} from "../../helpers/gql";
import _ from "lodash";

const Form: React.SFC<{ Id: string }> = (props) => {
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
    getCarousel,
    { loading: getLoading, error: getError, data: getData },
  ] = useLazyQuery(GET_CAROUSEL_MUTATION, {
    onCompleted: (data) => {
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
      id: string ;
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
  ] = useMutation(ADD_CAROUSEL_MUTATION);

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
                  {data && data.createCarousel && data.createCarousel.ok && (
                    <div
                      className=" d-flex justify-content-center alert alert-success d-flex"
                      role="alert"
                    >
                      Carousel Added
                    </div>
                  )}
                  {data &&
                    data.createCarousel &&
                    data.createCarousel.ok === false && (
                      <div
                        className=" d-flex justify-content-center alert alert-danger"
                        role="alert"
                      >
                        "Something went wrong"
                      </div>
                    )}
                  {error && (
                    <div
                      className="alert alert-danger d-flex justify-content-center"
                      role="alert"
                    >
                      "Something went wrong"
                    </div>
                  )}
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
  );
};

export default Form;
