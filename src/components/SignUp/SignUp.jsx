import React from "react";
import Heading from "./Heading";
import Form from "./Form";
import OAuth from "./OAuth";

class SignUp extends React.Component {
  render() {
    return (
        <div uk-height-viewport="expand: true" className="uk-flex uk-flex-middle" data-height-expand="true" style={{minHeight: '300px'}}>
            <div className="uk-width-1-3@m uk-width-1-2@s m-auto">
                <div className="uk-card-default p-5 rounded">
                    <Heading />
                    <Form />
                    <OAuth />
                </div>
            </div>
        </div>
    );
  }
}

export default SignUp;