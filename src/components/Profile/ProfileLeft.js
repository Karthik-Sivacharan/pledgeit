import React from "react";
import ProfilePicture from "./ProfilePicture";
import ProfileTheme from "./ProfileTheme";
import ProfileBilling from "./ProfileBilling";

class ProfileLeft extends React.Component {
  render() {
    return (
      <div className="uk-width-2-5@m uk-first-column">
        <ProfilePicture></ProfilePicture>
        <ProfileTheme></ProfileTheme>
        <ProfileBilling></ProfileBilling>
      </div>
    );
  }
}

export default ProfileLeft;
