import React from "react";
import Name from "./Name";
import Email from "./Email";
import Password from "./Password";
import ConfirmPassword from "./ConfirmPassword";

class Form extends React.Component {
  render() {
    return (
      <form
        className="uk-child-width-1-1 uk-grid-small uk-grid uk-grid-stack"
        uk-grid="true"
      >
        <Name></Name>
        <Email></Email>
        <Password></Password>
        <ConfirmPassword></ConfirmPassword>
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
    );
  }
}

export default Form;
