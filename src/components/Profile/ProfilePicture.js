import React from "react";
import Avatar from 'react-avatar';

class ProfilePicture extends React.Component {
  render() {
    return (
      <div className="uk-card-default rounded text-center p-4">
        <div className="uk-position-relative my-4">
          <div className="user-profile-photo  m-auto">
            {/* <img src="images/home-profile.jpg" alt="true" /> */}
            <Avatar name="Elie Daniels" size="150" textSizeRatio={1.75} textMarginRatio={0.2} round="100px" />
          </div>
          <h4 className="mb-2 mt-3"> Elie Daniels </h4>
          <div className="uk-position-center" style={{marginTop: "15px"}}>
            <div uk-form-custom="true" className="uk-form-custom">
              <input type="file" />
              <span className="uk-link icon-feather-camera icon-semi-medium text-white">
              </span>
            </div>
          </div>
          <p className="m-0"> pledge.com/elie-daniels </p>
        </div>
      </div>
    );
  }
}

export default ProfilePicture;
