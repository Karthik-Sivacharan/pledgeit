import React from "react";

class ProfilePicture extends React.Component {
  render() {
    return (
      <div className="uk-card-default rounded text-center p-4">
        <div className="uk-position-relative my-4">
          <div className="user-profile-photo  m-auto">
            <img src="images/home-profile.jpg" alt="true" />
          </div>
          <h4 className="mb-2 mt-3"> Elie Daniels </h4>
          <div className="uk-position-center">
            <div uk-form-custom="true" className="uk-form-custom">
              <input type="file" />
              <span className="uk-link icon-feather-camera icon-medium text-white">
                {" "}
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
