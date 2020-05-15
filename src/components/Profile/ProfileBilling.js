import React from "react";

class ProfileBilling extends React.Component {
  render() {
    return (
      <div className="uk-card-default rounded mt-5">
        <div className="uk-flex uk-flex-between uk-flex-middle py-3 px-4">
          <h5 className="mb-0"> Setup your billing</h5>
          <a
            href="#"
            uk-tooltip="title:You will recieve donations to this account; pos: left"
            title="true"
            aria-expanded="false"
          >
            {" "}
            <i className="icon-material-outline-info" />{" "}
          </a>
          {}
        </div>
        <hr className="m-0" />
        <div className="p-3">
          <div
            className="uk-grid-small uk-flex-middle uk-grid uk-grid-stack"
            uk-grid="true"
          >
            <div className="uk-grid-small uk-flex-middle" uk-grid="true">
              <div className="uk-width-auto">
                <button
                  type="button"
                  className="btn btn-danger btn-icon-only"
                  style={{
                    backgroundColor: "#3e416d",
                    border: "#3e416d"
                  }}
                >
                  <span className="d-flex justify-content-center">
                    <i className="icon-material-outline-account-balance" />
                  </span>
                </button>
              </div>
              <div className="uk-width-expand">
                <h5 className="mb-2"> Bank Account </h5>
              </div>
            </div>
          </div>
          <div
            className="uk-grid-small uk-flex-middle uk-grid uk-grid-stack"
            uk-grid="true"
          >
            <div className="uk-grid-small uk-flex-middle" uk-grid="true">
              <div className="uk-width-auto">
                <button
                  type="button"
                  className="btn btn-danger btn-icon-only"
                  style={{
                    backgroundColor: "#3e416d",
                    border: "#3e416d"
                  }}
                >
                  <span className="d-flex justify-content-center">
                    <i className="icon-line-awesome-cc-paypal" />
                  </span>
                </button>
              </div>
              <div className="uk-width-expand">
                <h5 className="mb-2"> PayPal </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileBilling;
