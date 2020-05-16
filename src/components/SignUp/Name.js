import React from "react";

class Name extends React.Component {
  render() {
    return (
      <div className="uk-first-column">
        <div className="uk-form-group">
          <label className="uk-form-label"> Name</label>
          <div className="uk-position-relative w-100">
            <span className="uk-form-icon">
              <i className="icon-feather-user" />
            </span>
            <input className="uk-input" type="text" placeholder="Full name" />
          </div>
        </div>
      </div>
    );
  }
}

export default Name;
