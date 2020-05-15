import React from "react";

class ProfileTheme extends React.Component {
  render() {
    return (
      <div className="uk-card-default rounded mt-5">
        <div className="uk-flex uk-flex-between uk-flex-middle py-3 px-4">
          <h5 className="mb-0"> Choose your theme</h5>
          {}
        </div>
        <hr className="m-0" />
        <div className="p-3">
          <div
            className="uk-grid-small uk-flex-middle uk-grid uk-grid-stack"
            uk-grid="true"
          >
            <div className="uk-width-auto uk-first-column">
              <button
                type="button"
                className="btn btn-warning btn-icon-only"
                style={{
                  backgroundColor: "#fe5f55"
                }}
              ></button>
            </div>
            <div className="uk-width-expand uk-grid-margin uk-first-column">
              <input className="uk-radio" type="radio" name="radio2" />
            </div>
            <div className="uk-width-auto uk-first-column">
              <button
                type="button"
                className="btn btn-warning btn-icon-only"
                style={{
                  backgroundColor: "#fdb44b"
                }}
              ></button>
            </div>
            <div className="uk-width-expand uk-grid-margin uk-first-column">
              <input className="uk-radio" type="radio" name="radio2" />
            </div>
            <div className="uk-width-auto uk-first-column">
              <button
                type="button"
                className="btn btn-warning btn-icon-only"
                style={{
                  backgroundColor: "#5F7FFF"
                }}
              ></button>
            </div>
            <div className="uk-width-expand uk-grid-margin uk-first-column">
              <input className="uk-radio" type="radio" name="radio2" />
            </div>
          </div>
          <div
            className="uk-grid-small uk-flex-middle uk-grid uk-grid-stack"
            uk-grid="true"
          >
            <div className="uk-width-auto uk-first-column">
              <button
                type="button"
                className="btn btn-warning btn-icon-only"
                style={{
                  backgroundColor: "#be79df"
                }}
              ></button>
            </div>
            <div className="uk-width-expand uk-grid-margin uk-first-column">
              <input className="uk-radio" type="radio" name="radio2" />
            </div>
            <div className="uk-width-auto uk-first-column">
              <button
                type="button"
                className="btn btn-warning btn-icon-only"
                style={{
                  backgroundColor: "#11999e"
                }}
              ></button>
            </div>
            <div className="uk-width-expand uk-grid-margin uk-first-column">
              <input className="uk-radio" type="radio" name="radio2" />
            </div>
            <div className="uk-width-auto uk-first-column">
              <button
                type="button"
                className="btn btn-warning btn-icon-only"
                style={{
                  backgroundColor: "#f85e9f"
                }}
              ></button>
            </div>
            <div className="uk-width-expand uk-grid-margin uk-first-column">
              <input className="uk-radio" type="radio" name="radio2" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileTheme;
