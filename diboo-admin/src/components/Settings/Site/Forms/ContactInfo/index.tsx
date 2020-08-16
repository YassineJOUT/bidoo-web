import React from "react";
import { Formik, Field } from "formik";
import { Error } from "../../../../Error";
import { contactValidationSchema } from "../../../../../utilities/validationSchema";


interface ContactInfoProps {
  id: string;
  supportEmail: string;
  adminEmail: string;
  sitePhone: string;
  invoiceEmail: string;
}

interface Props {
  data: ContactInfoProps;
  editSetting: Function;
}
const ContactInfoForm: React.FunctionComponent<Props> = (props) => {
  const editSite = async (values: ContactInfoProps, actions: any) => {
    actions.setSubmitting(true);
    await props.editSetting({ variables: values });
    actions.setSubmitting(false);
  };
  return (
    <Formik
      enableReinitialize
      initialValues={props.data}
      validationSchema={contactValidationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        return editSite(values, { setSubmitting, resetForm });
      }}
    >
      {({ handleSubmit, isSubmitting, touched, errors }) => (
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <h4 className="mt-0 header-title">Contact info</h4>
              <p className="text-muted mb-4">Fill all information below</p>

              <div className="form-group">
                <label>Contact us email</label>
                {touched.supportEmail && (
                  <Error touched={touched.supportEmail} message={errors.supportEmail} />
                )}
                <Field
                  type="email"
                  className="form-control"
                  name="supportEmail"
                />
              </div>

              <div className="form-group">
                <label>admin email</label>
                {touched.adminEmail && (
                  <Error touched={touched.adminEmail} message={errors.adminEmail} />
                )}
                <Field
                  type="email"
                  className="form-control"
                  name="adminEmail"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label>Invoice email</label>
                {touched.adminEmail && (
                  <Error touched={touched.adminEmail} message={errors.adminEmail} />
                )}
                <Field
                  type="email"
                  className="form-control"
                  name="adminEmail"
                />
              </div>

              <div className="form-group">
                <label>Phone number</label>
                {touched.sitePhone && (
                  <Error touched={touched.sitePhone} message={errors.sitePhone} />
                )}
                <Field type="text" className="form-control" name="sitePhone" />
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

export default ContactInfoForm;
