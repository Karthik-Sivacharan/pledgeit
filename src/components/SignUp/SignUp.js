import React from "react";
import {auth} from "../../api/auth";
import $ from 'jquery';
import { config } from "../../config/config";
// import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';

class Signup extends React.Component {

  constructor(props){
    super(props);
    if (localStorage.getItem("token") != undefined && localStorage.getItem("token") != "") {
      window.location.href = "/";
    }
  }

  submitForm = async () => {
    var username = $("#username").val();
    var password = $("#password").val();
    var re_password = $("#retype-password").val();
    var email = $("#email").val();
    console.log(password);
    console.log(re_password);
    if(password !== re_password){
      alert("Password did not match");
    }
    else{
      try{
        var response = await auth.register(username, email, password);
        if(!response.success){
          throw response.msg;
        }
        window.location.href = "/login";
        //  Re-direct to home page stating signup successful
      }
      catch(err){
        console.log("handle error:",err);
      }
    }
  }

  facebookResponse = async (response) => {
    const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
    const options = {
      method: 'POST',
      body: tokenBlob,
      mode: 'cors',
      cache: 'default',
      headers: {
        "access-control-allow-origin" : "*",
        "Content-type": "application/json; charset=UTF-8"
      }
    };
    try {
      var res = await fetch('http://localhost:5000/api/fbauth/', options);
      var result = await res.json();
      if(!result.success)
      {
        throw result.msg;
      }
      var username = result.username;
      var token = "Bearer " + result.token;
      this.props.handleAuthenticationSuccess(username, token);
      window.location.href = "/";
    }
    catch(err){
      console.log("error:", err);
    }
  }


  googleResponse = async (response) => {
        const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
        const options = {
            method: 'POST',
            body: tokenBlob,
            mode: 'cors',
            cache: 'default'
        };
        try {
          var res = await fetch('http://localhost:5000/api/goauth/', options);
          var result = await res.json();
          if(!result.success)
          {
            console.log(result.error);
            throw result.msg;
          }
          var username = result.username;
          var token = "Bearer " + result.token;
          this.props.handleAuthenticationSuccess(username, token);
          window.location.href = "/";
        }
        catch(err){
          console.log("error:", err);
        }
  };

  failure = async(response) => {
    console.log(response);
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
              <h3 className="mb-0"> Create new Account</h3>
              <p className="my-2">Login to manage your account.</p>
            </div>
            <div
              className="uk-child-width-1-1 uk-grid-small uk-grid uk-grid-stack"
              uk-grid="true"
            >
              <div className="uk-first-column">
                <div className="uk-form-group">
                  <label className="uk-form-label"> Name</label>
                  <div className="uk-position-relative w-100">
                    <span className="uk-form-icon">
                      <i className="icon-feather-user" />
                    </span>
                    <input
                      className="uk-input"
                      type="text"
                      placeholder="Full name"
                      id="username"
                    />
                  </div>
                </div>
              </div>
              <div className="uk-grid-margin uk-first-column">
                <div className="uk-form-group">
                  <label className="uk-form-label"> Email</label>
                  <div className="uk-position-relative w-100">
                    <span className="uk-form-icon">
                      <i className="icon-feather-mail" />
                    </span>
                    <input
                      className="uk-input"
                      type="email"
                      placeholder="name@example.com"
                      id="email"
                    />
                  </div>
                </div>
              </div>
              <div className="uk-width-1-2@s uk-grid-margin uk-first-column">
                <div className="uk-form-group">
                  <label className="uk-form-label"> Password</label>
                  <div className="uk-position-relative w-100">
                    <span className="uk-form-icon">
                      <i className="icon-feather-lock" />
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
              <div className="uk-width-1-2@s uk-grid-margin uk-first-column">
                <div className="uk-form-group">
                  <label className="uk-form-label"> Confirm password</label>
                  <div className="uk-position-relative w-100">
                    <span className="uk-form-icon">
                      <i className="icon-feather-lock" />
                    </span>
                    <input
                      className="uk-input"
                      type="password"
                      placeholder="********"
                      id="retype-password"
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
                  <p className="my-2">Sign up with :</p>
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
           
                <FacebookLogin
                  appId= {config.facebookappID}
                  autoLoad={false}
                  fields="name,email,picture"
                  callback={this.facebookResponse}
                  cssClass="btn btn-facebook btn-icon-label uk-first-column mb-2"
                  icon={<div><span className="btn-inner--icon"><i className="icon-brand-facebook-f" /></span><span className="btn-inner--text">Facebook</span></div>}
                  textButton=""
                />

                <GoogleLogin
                    clientId= {config.googleappId}
                    render={renderProps => (
                      <button
                      type="button"
                      className="btn btn-google-plus btn-icon-label mb-2"
                      style={{margin: '2px'}} 
                      onClick={renderProps.onClick}
                    >
                      <span className="btn-inner--icon">
                        <i className="icon-brand-google" />
                      </span>
                      <span className="btn-inner--text">Google </span>
                    </button>
                    )}
                    onSuccess={this.googleResponse}
                    onFailure={this.failure}
                    cookiePolicy={'single_host_origin'}
                  />
                
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
                    Already have an account? <a href="#">Login</a>
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

export default Signup;
