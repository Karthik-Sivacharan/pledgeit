import React from "react";
import Editor from "../Editor/Quill.jsx"

class ProfileStory extends React.Component {
  render() {
    return (
      <div className="uk-card-default rounded mt-4">
        <div className="uk-flex uk-flex-between uk-flex-middle py-3 px-4">
          <h5 className="mb-0"> What's your story?</h5>
          {}
        </div>

        <Editor />

      </div>
    );
  }
}

export default ProfileStory;
