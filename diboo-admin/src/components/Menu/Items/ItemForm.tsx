import React, { useState, useRef } from "react";
import { Formik, Field } from "formik";
import Dropzone from "react-dropzone";
import _ from "lodash";
import { CategoryProps } from "../Categories/CategoryForm";
import { useQuery } from "@apollo/react-hooks";
import { GET_MENUCATEGORIES_MUTATION } from "../../../helpers/gql";
import { Link } from "react-router-dom";
import Spinner from "../../Shared/Spinner";

export interface ItemProps {
  itemName: string;
  id: string;
  imagePath: string;
  status: boolean;
  description: string;
  price: number;
  instruction: boolean;
  popular: boolean;
  category: string;
}

interface Props {
  values: ItemProps;
  addOrEditItem: Function;
  categories: [CategoryProps]
}

const Form: React.FunctionComponent<Props> = (props) => {
  const dismissBtn = useRef<HTMLButtonElement>(null);
  const [preview, setPreview] = useState<any>(null);

  const addOrEditItem = (values: ItemProps, actions: any) => {
    props.addOrEditItem({ variables: {...values } }).finally(() => {
      dismissBtn!.current!.click();
      actions.resetForm();
      setPreview(null);
    });
  };
  const { loading, error, data } = useQuery(GET_MENUCATEGORIES_MUTATION);

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
              Add new Menu Item
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
              return addOrEditItem(values, { setSubmitting, resetForm });
            }}
          >
            {({ values, handleSubmit, setFieldValue, isSubmitting }) => (
              <form className="form-horizontal" onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <h4 className="mt-0 header-title">Item</h4>
                      <br />
                      <label>Menu Item Photo</label>
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
                      <div className="form-group">
                        <label>Item Price </label>
                        {/* <div className="row">
                      <div className="col-6">
                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios1"
                            value="option1"
                          />
                          <label className="form-check-label">
                            fixed Price
                          </label>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios1"
                            value="option2"
                          />
                          <label className="form-check-label">Multi size</label>
                        </div>
                      </div>
                    </div>*/}
                        <Field
                          type="number"
                          name="price"
                          className="form-control"
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-success mr-1 waves-effect waves-light"
                      >
                        { isSubmitting ? "Loading..." : "Save Changes"}
                      </button>
                    </div>
                    <div className="col-lg-6">
                      <div className="card-body">
                        <div className="form-group">
                          <label>Item category</label>

                          { !loading ? (props.categories ? (
                            <Field as="select" className="form-control" name="category" value={values.category}>
                             
                              {data.getCategories.data.map(
                                (val: any, index: number) => {
                                  
                                  return (
                                  <option value={val.id} key={index} >
                                    {val.categoryName}
                                  </option>
                                
                                )}
                              )}
                            </Field>
                          ) : (
                            <span>
                              <p>No Category found</p>
                              <Link
                                to="/menu-categories"
                                title="Create Category"
                              >Create Category</Link>
                            </span>
                          )
                          ) : <Spinner />}
                        </div>

                        <div className="form-group">
                          <label>Item name </label>
                          <Field
                            type="text"
                            name="itemName"
                            className="form-control"
                          />
                        </div>

                        <div className="form-group">
                          <label>Description</label>
                          <Field
                            component="textarea"
                            name="description"
                            className="form-control"
                          />
                        </div>

                        <div className="form-group">
                          <div className="row">
                            <div className="col-6">
                              <div className="form-group">
                                <label>Instruction</label>
                                <br />
                                <div
                                  className="btn-group btn-group-toggle mt-2 mt-xl-0"
                                  data-toggle="buttons"
                                >
                                  <label
                                    className={
                                      "btn btn-outline-primary btn-sm btn-rounded " +
                                      (values.instruction ? "active" : "")
                                    }
                                    onClick={() =>
                                      setFieldValue("instruction", true)
                                    }
                                  >
                                    <input type="radio" />
                                    Yes
                                  </label>
                                  <label
                                    className={
                                      "btn btn-outline-danger btn-sm btn-rounded " +
                                      (!values.instruction ? "active" : "")
                                    }
                                    onClick={() =>
                                      setFieldValue("instruction", false)
                                    }
                                  >
                                    <input type="radio" />
                                    No
                                  </label>
                                </div>
                              </div>
                            </div>
                            {/* <div className="col-6">
                        <div className="form-group">
                          <label>Add-ons</label> <br />
                          <div
                            className="btn-group btn-group-toggle mt-2 mt-xl-0"
                            data-toggle="buttons"
                          >
                            <label className="btn btn-outline-primary btn-sm btn-rounded  active">
                              <input type="radio" name="options" id="option1" />
                              Yes
                            </label>
                            <label className="btn btn-outline-danger  btn-sm btn-rounded ">
                              <input type="radio" name="options" id="option2" />
                              No
                            </label>
                          </div>
                        </div>
                      </div>
                     */}
                          </div>
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
