import React from "react";
import About from "./About";
import Container from "./Container";

class PageContent extends React.Component {

  componentWillReceiveProps = () => {
     this.forceUpdate();
  }

  render() {
    return (
      <div className="page-content">
        <div className="course-details-wrapper topic-1 uk-light">
          <div className="container p-sm-0">
            <div uk-grid="true" className="uk-grid uk-grid-stack">
              <div className="uk-width-2-3@m uk-first-column">
                <About
                profilePic = {this.props.profile.savedprofilePic ? this.props.profilePic : "./images/defaultPic.jpeg"}
                />
                <nav className="responsive-tab style-5">
                  <ul uk-switcher="connect: #course-intro-tab ;animation: uk-animation-slide-right-medium, uk-animation-slide-left-medium">
                    <li className="uk-active">
                      <a href="#" aria-expanded="false">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-expanded="false">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-expanded="false">
                        Announcement
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-expanded="false">
                        Reviews
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <Container
          profile={this.props.profile}
        />
      </div>
    );
  }
}

export default PageContent;
