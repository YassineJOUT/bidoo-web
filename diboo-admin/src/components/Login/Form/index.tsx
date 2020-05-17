import React, { Component } from "react";
import { history } from "../../../utilities/history";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Form from "./Form";

const EXCHANGE_RATES = gql`
  {
    getAllSettings {
    id
    adminName
    adminEmail
    }
  }
`;

class LoginPage extends Component {
  testQuery = () => {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
      console.log(data);
    return <p>Sucess</p>;
  };
  handleSubmit = (
    values: { email: string; password: string },
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: Function; resetForm: Function }
  ) => {
    setSubmitting(true);
    //this.testQuery();
    setSubmitting(false);
    resetForm();
  };
  forgotPwd = () => {
    history.push("forgotpassword");
  };
  render = () => {
    return (
      <div>
        <div className="account-pages my-5 pt-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6 col-xl-5">
                <div className="card bg-pattern shadow-none">
                  <div className="card-body">
                    <div className="text-center mt-4">
                    <h4 className="font-18 text-center">Welcome Back !</h4>
                      <p className="text-muted text-center mb-4">
                        Sign in to continue to DIBOO super admin space.
                      </p>
                    </div>
                    <div className="p-3">
                    <div className=" text-center mb-3">
                        <a href="/#" className="logo">
                          <img
                            src="../assets/images/Diboo.png"
                            height="150"
                            alt="logo"
                          />
                        </a>
                      </div>
                      <Form/>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

/*const mapStateToProps = ({ login }: ApplicationState) => ({
  userInfo: login.userInfo,
  isLoggedIn: login.isLoggedIn,
  error: login.error,
  isLoading: login.isLoading
});*/

//const mapActionsToProps = { login };

//export default connect(mapStateToProps, mapActionsToProps)(LoginPage);
export default LoginPage;
