import React from "react";

class ProfileCreateFooter extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="uk-grid-collapse uk-grid uk-grid-stack" uk-grid="true">
          <div className="uk-width-expand@s uk-first-column">
            <p>
              © 2019 <strong>Courseplus</strong>. All Rights Reserved.{" "}
            </p>
          </div>
          <div className="uk-width-auto@s uk-grid-margin uk-first-column">
            <nav className="footer-nav-icon">
              <ul>
                <li>
                  <a href="#">
                    <i className="icon-brand-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-brand-dribbble" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-brand-youtube" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-brand-twitter" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCreateFooter;
