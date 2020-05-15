import React from "react";

class ProfileAbout extends React.Component {
  render() {
    return (
      <div className="uk-card-default rounded">
        <div className="uk-flex uk-flex-between uk-flex-middle py-3 px-4">
          <h5 className="mb-0"> About you</h5>
          {}
        </div>
        <hr className="m-0" />
        <form
          className="uk-child-width-1-1@s uk-grid-small p-4 uk-grid uk-grid-stack"
          uk-grid="true"
        >
          <div className="uk-first-column">
            <h5 className="uk-text-bold mb-2"> What are you working on? </h5>
            <input
              type="text"
              className="uk-input"
              placeholder="I'm working to save groundwater"
            />
          </div>
          <div className="uk-grid-margin uk-first-column">
            <h5 className="uk-text-bold mb-2"> Choose your work category? </h5>
            <select className="uk-select">
              {" "}
              <option>Heath Worker</option> <option>Social Activist</option>{" "}
              <option>Environmentalist</option>
              <option>Other</option>
            </select>
          </div>
          <div className="uk-grid-margin uk-first-column">
            <h5 className="uk-text-bold mb-2"> Your Hashtag </h5>
            <input type="text" className="uk-input" placeholder="#SaveWater" />
          </div>
          <div className="uk-grid-margin uk-first-column">
            <h5 className="uk-text-bold mb-2"> Your Website </h5>
            <input
              type="text"
              className="uk-input"
              placeholder="www.pledge.com"
            />
          </div>
          {}
        </form>
      </div>
    );
  }
}

export default ProfileAbout;
