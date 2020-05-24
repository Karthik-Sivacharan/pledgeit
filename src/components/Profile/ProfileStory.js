import React from "react";
import Editor from "../Editor/Quill.jsx"

class ProfileStory extends React.Component {
  render() {
    return (
      <div className="uk-card-default rounded mt-4">
        <div className="uk-flex uk-flex-between uk-flex-middle py-3 px-4">
          <h5 className="mb-0"> What's your story?</h5>
        </div>
        <div className="uk-flex py-2 px-4">

          <div className="uk-flex uk-flex-middle px-4" uk-margin="true" style={{margin: "0 auto"}}>
          
              <button type="button" className="btn btn-icon-label uk-margin-small-top uk-first-column mr-1 ml-1">
                <span className="btn-inner--icon">
                  <i className="icon-feather-image" />
                </span>
                <span className="btn-inner--text">Upload Image</span>
              </button>

              <button type="button" className="btn btn-icon-label uk-margin-small-top uk-first-column mr-1 ml-1">
                <span className="btn-inner--icon">
                  <i className="icon-feather-video" />
                </span>
                <span className="btn-inner--text">Upload Video</span>
              </button>

          </div>

        </div>

        <Editor />

      </div>
    );
  }
}

export default ProfileStory;
