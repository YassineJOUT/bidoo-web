import React from "react";
import { Error } from "../../../../Error";
import { Formik, Field } from "formik";
import { locationValidationSchema } from "../../../../../utilities/validationSchema";
interface LocationProps {
  id: string;
  address: string;
  city: string;
  postCode: string;
  country: string;
}

interface Props {
  data: LocationProps;
  editSetting: Function;
}
const LocationForm: React.FunctionComponent<Props> = (props) => {
  const editSite = async (values: LocationProps, actions: any) => {
    actions.setSubmitting(true);
    await props.editSetting({ variables: values });
    actions.setSubmitting(false);
  };
  return (
    <Formik
      enableReinitialize
      initialValues={props.data}
      validationSchema={locationValidationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        return editSite(values, { setSubmitting, resetForm });
      }}
    >
      {({ handleSubmit, isSubmitting, touched, errors }) => (
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <h4 className="mt-0 header-title">Location</h4>
              <p className="text-muted mb-4">Fill all information below</p>
              <div className="form-group">
                <label>Address</label>
                {touched.address && (
                  <Error touched={touched.address} message={errors.address} />
                )}
                <Field type="text" className="form-control" name="address" />
              </div>
              <div className="form-group">
                <label>City</label>
                {touched.country && (
                  <Error touched={touched.country} message={errors.country} />
                )}
                <Field type="text" className="form-control" name="country" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label>Country</label>
                {touched.country && (
                  <Error touched={touched.country} message={errors.country} />
                )}
                <Field type="text" className="form-control" name="country" />
              </div>

              <div className="form-group">
                <label>Post code</label>
                {touched.postCode && (
                  <Error touched={touched.postCode} message={errors.postCode} />
                )}
                <Field type="text" className="form-control" name="postCode" />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-success mr-1 waves-effect waves-light"
          >
            {isSubmitting ? "Loading.." : "Save Changes"}
          </button>
        </form>
      )}
    </Formik>
  );
};

export default LocationForm;
