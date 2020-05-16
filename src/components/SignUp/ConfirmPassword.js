import React from "react";

class ConfirmPassword extends React.Component {
  render() {
    return (
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
    );
  }
}

export default ConfirmPassword;
