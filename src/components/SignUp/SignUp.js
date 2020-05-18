import React from "react";

class Signup extends React.Component {
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
            <form
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
                    />
                  </div>
                </div>
              </div>
              <div className="uk-grid-margin uk-first-column">
                <input
                  type="submit"
                  defaultValue="Get Started"
                  className="btn btn-default  btn-block"
                />
                <div className="uk-text-center">
                  <p className="my-2">Sign up with :</p>
                </div>
              </div>
            </form>
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
