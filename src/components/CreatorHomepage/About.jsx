import React from "react";

class About extends React.Component {

  componentWillReceiveProps= () => {
    this.forceUpdate();
  }
  
  render() {
    return (
      <div className="course-details">
        <div className="course-details-info mt-4">

          <div className="user-details-card">
            <div className="user-details-card-avatar" >
              <img src={this.props.profilePic} alt="true" />
            </div>
            <div className="user-details-card-name">
              <h1> {localStorage.getItem("username")} </h1>
              <p>
                Master JavaScript with the most complete course! Projects Excellent
                course. Master JavaScript with the most complete course! Projects Excellent
                course.  
              </p>
            </div>
          </div>

          <ul>
            <li>
              {" "}
              <i className="icon-feather-users" /> 120 Supporters{" "}
            </li>
          </ul>
        </div>
        {/* <div className="course-details-info">
          <ul>
            <li>
              {" "}
              Created by <a href="#"> Jonathan Madano </a>{" "}
            </li>
            <li> Last updated 10/2019</li>
          </ul>
        </div> */}
      </div>
    );
  }
}

export default About;
