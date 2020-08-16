import React, { useEffect, useContext } from "react";
import { Formik } from "formik";
import { useMutation } from "@apollo/react-hooks";
import { USER_LOGIN_MUTATION } from "../../../helpers/gql";
import { loginValidationSchema } from "../../../utilities/validationSchema";
import { Error } from "../../Error";
import { history } from "../../../utilities/history";
import { Context, saveState } from "../../../utilities/useAuth";
// addUser = useMutation(mutation, {
//   update: (proxy, mutationResult) => {
//      /* NOT CALLED */
//   },
//   refetchQueries: (result) => {
//     /* CALLED ON errorPolicy: "ignore" */
//   },
//   onCompleted: (data) => {
//      /* NOT CALLED */
//   },
//   onError: (data) => {
//      /* NOT CALLED */
//   }
// });
const Form: React.SFC = () => {
  //get contexte
  const { contextState, setContext } = useContext(Context);
  // open dashboard if user is logged in
  if (contextState.isLogged) {
    history.push("dashboard");
  }
  // login mutation
  const [loginUser, { loading: mutationLoading, error }] = useMutation(
    USER_LOGIN_MUTATION,
    {
      onCompleted: (data) => {
        const { login } = data;
        if (login.ok) {
          const state = {
            contextState: {
              isLogged: true,
              user: {
                id: login.id,
                role: "admin",
              },
            },
            setContext,
          };
          setContext(state);
          saveState(state);
          history.push("dashboard");
        }
        else{
          const state = {
            contextState: {
              isLogged: false,
              error: login.error
            },
            setContext,
          };
          setContext(state);
          saveState(state);
        }
      },
    }
  );

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
            {touched.email && (
              <Error touched={touched.email} message={errors.email} />
            )}
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
            {touched.password && (
              <Error touched={touched.password} message={errors.password} />
            )}
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
              {mutationLoading ? "Loading... " : "Login"}
            </button>
          </div>

          <div className="mt-4 text-center">
            {error ?  <Error message={"Something went wrong"} /> : contextState.error && <Error message={contextState.error} />}
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
