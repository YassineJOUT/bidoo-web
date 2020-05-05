import React from "react";
import { Formik } from "formik";
import { useMutation } from "@apollo/react-hooks";
import { USER_LOGIN_MUTATION } from "../../../helpers/gql";
import { loginValidationSchema } from "../../../utilities/validationSchema";
import { Error } from "../../Error";
import { history } from "../../../utilities/history";

const Form: React.SFC = () => {
  const [
    loginUser,
    { loading: mutationLoading, data },
  ] = useMutation(USER_LOGIN_MUTATION);
  
  if (data && data.login.ok) {
    history.push("dashboard");
  }
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginValidationSchema}
      onSubmit={(values, { setSubmitting }) => loginUser({ variables: values })}
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
          <div className="form-group">
            <label>Email</label>
            {touched.email && <Error touched={touched.email} message={errors.email} /> } 
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email"
              value={values.email}
              className="form-control"
              id="username"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
           {touched.password && <Error touched={touched.password} message={errors.password} /> } 
            <input
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              name="password"
              placeholder="Password"
              value={values.password}
              className="form-control"
              id="userpassword"
            />
          </div>

          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customControlInline"
            />
            
          </div>

          <div className="mt-3">
            <button
              className="btn btn-primary btn-block waves-effect waves-light"
              type="submit"
            >
              {mutationLoading ? "Loading... " :  "Login"}
            </button>
          </div>

          <div className="mt-4 text-center">
              {data && console.log(data.login)}
          {data && !data.login.ok && <Error message={data.login.error} /> } 
           
            <a href="/#">
              <i className="mdi mdi-lock"></i> Forgot your password?
            </a>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Form;
