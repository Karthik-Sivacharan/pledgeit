import React from "react";
import ProfileAbout from "./ProfileAbout";
import ProfileStory from "./ProfileStory";

class ProfileRight extends React.Component {
  render() {
    return (
      <div className="uk-width-expand@m uk-grid-margin uk-first-column">
        <ProfileAbout></ProfileAbout>
        <ProfileStory></ProfileStory>
      </div>
    );
  }
}

export default ProfileRight;
