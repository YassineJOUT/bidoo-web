import React from "react";
import { Formik, Field } from "formik";
import { siteValidationSchema } from "../../../../../utilities/validationSchema";
import { Error } from "../../../../Error";


interface SiteInterface {
  id: string;
  siteName: string;
  headerText: string;
  facebook: string;
  twitter: string;
  youtube: string;
  instagram: string;
  siteMetaTagTitle: string;
  siteMetaTagKeyword: string;
  siteMetaTagDescription: string;
}

interface Props {
  data: SiteInterface;
  editSetting: Function
}
const SiteForm: React.FunctionComponent<Props> = (props) => {

  const editSite = async (values: SiteInterface, actions: any) => {
    actions.setSubmitting(true);
    await props.editSetting({ variables: values });
    actions.setSubmitting(false);
  };
  return (
    <Formik
      enableReinitialize
      initialValues={props.data}
      validationSchema={siteValidationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        return editSite(values, { setSubmitting, resetForm });
        // console.log(values)
      }}
    >
      {({ handleSubmit, isSubmitting, touched, errors }) => (
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <h4 className="mt-0 header-title">General info</h4>
              <p className="text-muted mb-4">Fill all information below</p>

              <div className="form-group">
                <label>Website name</label>
                {touched.siteName && (
                  <Error touched={touched.siteName} message={errors.siteName} />
                )}
                <Field type="text" className="form-control" name="siteName" />
              </div>
              <div className="form-group">
                <label>Header title</label>
                {touched.headerText && (
                  <Error touched={touched.headerText} message={errors.headerText} />
                )}
                <Field type="text" className="form-control" name="headerText" />
              </div>

              <h4 className="mt-0 header-title">Social media</h4>
              <div className="form-group">
                <label>Facebook</label>
                {touched.facebook && (
                  <Error touched={touched.facebook} message={errors.facebook} />
                )}
                <Field type="text" className="form-control" name="facebook" />
              </div>
              <div className="form-group">
                <label>Instagram</label>
                {touched.instagram && (
                  <Error touched={touched.instagram} message={errors.instagram} />
                )}
                <Field type="text" className="form-control" name="instagram" />
              </div>
              <div className="form-group">
                <label>Twitter</label>
                {touched.twitter && (
                  <Error touched={touched.twitter} message={errors.twitter} />
                )}
                <Field type="text" className="form-control" name="twitter" />
              </div>
              <div className="form-group">
                <label>Youtube</label>
                {touched.youtube && (
                  <Error touched={touched.youtube} message={errors.youtube} />
                )}
                <Field type="text" className="form-control" name="youtube" />
              </div>
            </div>
            <div className="col-lg-6">
              <h4 className="mt-0 header-title">SEO</h4>

              <div className="form-group">
                <label>Meta title</label>
                {touched.siteMetaTagTitle && (
                  <Error touched={touched.siteMetaTagTitle} message={errors.siteMetaTagTitle} />
                )}
                <Field
                  type="text"
                  className="form-control"
                  name="siteMetaTagTitle"
                />
              </div>
              <div className="form-group">
                <label>Meta Keywords</label>
                {touched.siteMetaTagKeyword && (
                  <Error touched={touched.siteMetaTagKeyword} message={errors.siteMetaTagKeyword} />
                )}
                <Field
                  type="text"
                  className="form-control"
                  name="siteMetaTagKeyword"
                />
              </div>

              <div className="form-group">
                <label>Meta Description</label>
                {touched.siteMetaTagDescription && (
                  <Error touched={touched.siteMetaTagDescription} message={errors.siteMetaTagDescription} />
                )}
                <Field
                  component={"textarea"}
                  className="form-control"
                  name="siteMetaTagDescription"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-success mr-1 waves-effect waves-light"
            {...{ disabled: isSubmitting }}
          >
            {isSubmitting ? "Loading.." : "Save Changes"}
          </button>
         
        </form>
      )}
    </Formik>
  );
};

export default SiteForm;
