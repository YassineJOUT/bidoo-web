import { Error } from "../../../../Error";
import React from "react";
import { Formik, Field } from "formik";
import { taxValidationSchema } from "../../../../../utilities/validationSchema";

interface TaxProps {
  id: string;
  tax: number;
}

interface Props {
  data: TaxProps;
  editSetting: Function;
}

const TaxForm: React.FunctionComponent<Props> = (props) => {
  const editSite = async (values: TaxProps, actions: any) => {
    actions.setSubmitting(true);
    await props.editSetting({ variables: values });
    actions.setSubmitting(false);
  };
  return (
    <Formik
      enableReinitialize
      initialValues={props.data}
      validationSchema={taxValidationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        return editSite(values, { setSubmitting, resetForm });
      }}
    >
      {({ handleSubmit, isSubmitting, touched, errors }) => (
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <h4 className="mt-0 header-title">Tax</h4>
              <p className="text-muted mb-4">Fill all information below</p>

              <div className="form-group">
                <label>Tax in %</label>
                {touched.tax && (
                  <Error touched={touched.tax} message={errors.tax} />
                )}
                <Field type="number" className="form-control" name="tax" />
              </div>
              <button
                type="submit"
                className="btn btn-success mr-1 waves-effect waves-light"
              >
                {isSubmitting ? "Loading.." : "Save Changes"}
              </button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default TaxForm;
