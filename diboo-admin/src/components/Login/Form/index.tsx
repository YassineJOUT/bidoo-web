import React, { Component } from "react";

interface ILoginProps {
  login: Function;
}

interface ILoginStateProps {
  userInfo: any;
  isLoggedIn: boolean;
  error: string;
  isLoading: boolean;
}

type IProps = ILoginProps & ILoginStateProps;

class LoginPage extends Component {
  handleSubmit = (
    values: { email: string; password: string },
    {
      setSubmitting,
      resetForm
    }: { setSubmitting: Function; resetForm: Function }
  ) => {
    setSubmitting(true);
    //this.props.login(values.email, values.password);
    setSubmitting(false);
    resetForm();
  };

 
  render = () => {
   

    return (

        <div className="account-pages my-5 pt-5">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6 col-xl-5">
                    <div className="card bg-pattern shadow-none">
                        <div className="card-body">
                            <div className="text-center mt-4">
                                <div className="mb-3">
                                    <a href="i" className="logo"><img src="../assets/images/Diboo.png" height="150" alt="logo" /></a>
                                </div>
                            </div>
                            <div className="p-3"> 
                                <h4 className="font-18 text-center">Welcome Back !</h4>
                                <p className="text-muted text-center mb-4">Sign in to continue to DIBOO super admin space.</p>
                                <form className="form-horizontal" action="./dashboard.html" >
            
                                    <div className="form-group">
                                        <label >Email</label>
                                        <input type="email" className="form-control" id="username" placeholder="Enter username"  />
                                    </div>
            
                                    <div className="form-group">
                                        <label >Password</label>
                                        <input type="password" className="form-control" id="userpassword" placeholder="Enter password" />
                                    </div>
            
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customControlInline"/>
                                        <label className="custom-control-label" >Remember me</label>
                                    </div>
                                    
                                    <div className="mt-3">
                                        <button className="btn btn-primary btn-block waves-effect waves-light" type="submit">Log In</button>
                                    </div>
        
                                    <div className="mt-4 text-center">
                                        <a href="recoverpw.html"><i className="mdi mdi-lock"></i> Forgot your password?</a>
                                    </div>
                                </form>
            
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
