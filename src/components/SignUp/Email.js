import React from "react";

class Email extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Email;
