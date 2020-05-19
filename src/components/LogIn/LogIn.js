import React from "react";
import {auth} from "../../api/auth";
import $ from "jquery";

class Login extends React.Component {

  constructor(props){
    super(props);
    if (localStorage.getItem("token") != undefined && localStorage.getItem("token") != "") {
      window.location.href = "/";
    }
  }
  
  submitForm = async () => {
    var username = $("#username").val();
    var password = $("#password").val();
    var token = "";
    try{
      var response = await auth.login(username, password);
      if(!response.success){
        throw response.msg;
      }
      username = response.username;
      token = "Bearer " + response.token;
      this.props.handleAuthenticationSuccess(username, token);
      window.location.href = "/";
    }
    catch(err){
      console.log("handle error:",err);
    }
  }


  render() {
    return (
      <div
        uk-height-viewport="expand: true"
        className="uk-flex uk-flex-middle"
        data-height-expand="true"
        style={{
          minHeight: "300px"
        }}
      >
        <div className="uk-width-1-3@m uk-width-1-2@s m-auto">
          <div className="uk-card-default p-5 rounded">
            <div className="mb-4 uk-text-center">
              <h3 className="mb-0"> Log in to your Account</h3>
            </div>
            <div
              className="uk-child-width-1-1 uk-grid-small uk-grid uk-grid-stack"
              uk-grid="true"
            >
              <div className="uk-first-column">
                <div className="uk-form-group">
                  <label className="uk-form-label"> Username</label>
                  <div className="uk-position-relative w-100">
                    <span className="uk-form-icon">
                      <i className="icon-feather-user" />
                    </span>
                    <input
                      className="uk-input"
                      type="text"
                      placeholder="Username"
                      id="username"
                    />
                  </div>
                </div>
              </div>
              <div className="uk-grid-margin uk-first-column">
                <div className="uk-form-group">
                  <label className="uk-form-label"> Password</label>
                  <div className="uk-position-relative w-100">
                    <span className="uk-form-icon">
                      <i className="icon-feather-mail" />
                    </span>
                    <input
                      className="uk-input"
                      type="password"
                      placeholder="********"
                      id="password"
                    />
                  </div>
                </div>
              </div>
              <div className="uk-grid-margin uk-first-column">
                <input
                  type="submit"
                  defaultValue="Get Started"
                  className="btn btn-default  btn-block"
                  onClick={this.submitForm}
                />
                <div className="uk-text-center">
                  <p className="my-2">Log in with :</p>
                </div>
              </div>
            </div>
            <div
              className="uk-text-center"
              style={{
                paddingLeft: "0px"
              }}
            >
              <div className="uk-position-relative w-100">
                <button
                  type="button"
                  className="btn btn-facebook btn-icon-label uk-first-column mb-2"
                  style={{margin: '2px'}} 
                  href="https://www.facebook.com/v6.0/dialog/oauth?client_id=183440006075851&display=popup&response_type=token&redirect_uri=http://localhost:5000/api/fbauth"
                >
                  <span className="btn-inner--icon">
                    <i className="icon-brand-facebook-f" />
                  </span>
                  <span className="btn-inner--text">Facebook</span>
                </button>
                <button
                  type="button"
                  className="btn btn-google-plus btn-icon-label mb-2"
                  style={{margin: '2px'}} 
                >
                  <span className="btn-inner--icon">
                    <i className="icon-brand-google" />
                  </span>
                  <span className="btn-inner--text">Google </span>
                </button>
                <button
                  type="button"
                  className="btn btn-twitter btn-icon-label mb-2"
                  style={{margin: '2px'}} 
                >
                  <span className="btn-inner--icon">
                    <i className="icon-brand-twitter" />
                  </span>
                  <span className="btn-inner--text">Twitter</span>
                </button>
                <div className="uk-width-expand@s uk-first-column mt-3">
                  <p>
                    Don't have an account? <a href="#">Signup</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
