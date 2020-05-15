import React from "react";
import ProfileLeft from "./ProfileLeft";
import ProfileRight from "./ProfileRight";
import ProfileCreateFooter from "./ProfileCreateFooter";

class ProfileCreate extends React.Component {
  render() {
    return (
      <div className="page-content-inner">
        <h2>Setup your page</h2>
        <div uk-grid="true" className="uk-grid uk-grid-stack">
          <ProfileLeft></ProfileLeft>
          <ProfileRight></ProfileRight>
        </div>
        <div uk-grid="true" className="uk-grid uk-grid-stack">
        <button className="btn btn-default grey m-auto mb-3">Publish your page</button>
        </div>
        <ProfileCreateFooter></ProfileCreateFooter>
      </div>
    );
  }
}

export default ProfileCreate;
