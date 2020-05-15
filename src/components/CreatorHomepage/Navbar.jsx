import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav
        className="mmenu-init mm-menu mm-offcanvas"
        id="mm-0"
        aria-hidden="true"
      >
        <div className="mm-panels">
          <div className="mm-panel mm-hasnavbar mm-opened" id="mm-1">
            <div className="mm-navbar">
              <a className="mm-title">Menu</a>
            </div>
            <ul className="mm-listview">
              <li>
                <a href="#">Home</a>{" "}
              </li>
              <li>
                <em className="mm-counter">8</em>
                <a
                  className="mm-next mm-fullsubopen"
                  href="#mm-2"
                  aria-owns="mm-2"
                  aria-haspopup="true"
                >
                  <span className="mm-sronly">Open submenu (Explore)</span>
                </a>
                <a href="#">Explore</a>
              </li>
              <li>
                <a href="course-path.html" className="nav-active">
                  Track
                </a>{" "}
              </li>
              <li>
                <a href="book.html">Book</a>{" "}
              </li>
              <li>
                <a href="blog-1.html">Blog</a>{" "}
              </li>
              <li>
                <em className="mm-counter">6</em>
                <a
                  className="mm-next mm-fullsubopen"
                  href="#mm-3"
                  aria-owns="mm-3"
                  aria-haspopup="true"
                >
                  <span className="mm-sronly">Open submenu (Pages)</span>
                </a>
                <a href="#">Pages</a>
              </li>
            </ul>
          </div>
          <div
            className="mm-panel mm-hidden mm-hasnavbar"
            id="mm-2"
            aria-hidden="true"
          >
            <div className="mm-navbar">
              <a
                className="mm-btn mm-prev"
                href="#mm-1"
                aria-owns="mm-1"
                aria-haspopup="true"
              >
                <span className="mm-sronly">Close submenu (Explore)</span>
              </a>
              <a className="mm-title" href="#mm-1" aria-hidden="true">
                Explore
              </a>
            </div>
            <ul className="dropdown-nav nav-large nav-courses mm-listview">
              <li>
                <a href="course-card.html#">
                  <i
                    className="icon-brand-js-square"
                    style={{
                      color: "#f7df1e"
                    }}
                  />{" "}
                  JavaScript
                </a>
              </li>
              <li>
                <a href="course-card.html">
                  <i
                    className="icon-brand-node-js"
                    style={{
                      color: "green"
                    }}
                  />{" "}
                  NodeJS{" "}
                </a>
              </li>
              <li>
                <a href="course-card.html">
                  <i
                    className="icon-brand-angular"
                    style={{
                      color: "#dd0031"
                    }}
                  />{" "}
                  Angular{" "}
                </a>
              </li>
              <li>
                <a href="course-card.html">
                  <i
                    className="icon-brand-css3-alt"
                    style={{
                      color: "blue"
                    }}
                  />{" "}
                  CSS{" "}
                </a>
              </li>
              <li>
                <a href="course-card.html">
                  <i
                    className="icon-brand-html5"
                    style={{
                      color: "#f0653f"
                    }}
                  />{" "}
                  HTML5{" "}
                </a>
              </li>
              <li>
                <a href="course-card.html">
                  <i
                    className="icon-brand-react"
                    style={{
                      color: "#67fcef"
                    }}
                  />{" "}
                  React{" "}
                </a>
              </li>
              <li>
                <a href="course-card.html">
                  <i
                    className="icon-brand-vuejs"
                    style={{
                      color: "green"
                    }}
                  />{" "}
                  Vue JS{" "}
                </a>
              </li>
              <li>
                <a href="course-card.html">
                  <i
                    className="icon-brand-python"
                    style={{
                      color: "#b1b172"
                    }}
                  />{" "}
                  Python{" "}
                </a>
              </li>
            </ul>
          </div>
          <div
            className="mm-panel mm-hidden mm-hasnavbar"
            id="mm-3"
            aria-hidden="true"
          >
            <div className="mm-navbar">
              <a
                className="mm-btn mm-prev"
                href="#mm-1"
                aria-owns="mm-1"
                aria-haspopup="true"
              >
                <span className="mm-sronly">Close submenu (Pages)</span>
              </a>
              <a className="mm-title" href="#mm-1" aria-hidden="true">
                Pages
              </a>
            </div>
            <ul className="dropdown-nav mm-listview">
              <li>
                <a href="page-pricing.html">Pricing</a>{" "}
              </li>
              <li>
                <a href="page-Privacy.html">Privacy</a>
              </li>
              <li>
                <a href="page-term.html">Terms</a>
              </li>
              <li>
                <a href="page-contact.html">Contact</a>
              </li>
              <li>
                <em className="mm-counter">4</em>
                <a
                  className="mm-next mm-fullsubopen"
                  href="#mm-4"
                  aria-owns="mm-4"
                  aria-haspopup="true"
                >
                  <span className="mm-sronly">Open submenu (Account)</span>
                </a>
                <a href="#">Account</a>
              </li>
              <li>
                <em className="mm-counter">3</em>
                <a
                  className="mm-next mm-fullsubopen"
                  href="#mm-5"
                  aria-owns="mm-5"
                  aria-haspopup="true"
                >
                  <span className="mm-sronly">Open submenu (Development)</span>
                </a>
                <a href="#">Development</a>
              </li>
            </ul>
          </div>
          <div
            className="mm-panel mm-hidden mm-hasnavbar"
            id="mm-4"
            aria-hidden="true"
          >
            <div className="mm-navbar">
              <a
                className="mm-btn mm-prev"
                href="#mm-3"
                aria-owns="mm-3"
                aria-haspopup="true"
              >
                <span className="mm-sronly">Close submenu (Account)</span>
              </a>
              <a className="mm-title" href="#mm-3" aria-hidden="true">
                Account
              </a>
            </div>
            <ul className="dropdown-nav mm-listview">
              <li>
                <a href="page-login.html">login</a>
              </li>
              <li>
                <a href="page-register.html">register</a>
              </li>
              <li>
                <a href="page-simple-login.html">Simple login</a>
              </li>
              <li>
                <a href="page-simple-register.html">Simple register</a>
              </li>
            </ul>
          </div>
          <div
            className="mm-panel mm-hidden mm-hasnavbar"
            id="mm-5"
            aria-hidden="true"
          >
            <div className="mm-navbar">
              <a
                className="mm-btn mm-prev"
                href="#mm-3"
                aria-owns="mm-3"
                aria-haspopup="true"
              >
                <span className="mm-sronly">Close submenu (Development)</span>
              </a>
              <a className="mm-title" href="#mm-3" aria-hidden="true">
                Development
              </a>
            </div>
            <ul className="dropdown-nav mm-listview">
              <li>
                <a href="page-elements.html">Elements</a>
              </li>
              <li>
                <a href="page-components.html">Components</a>
              </li>
              <li>
                <a href="page-icons.html">Icons</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
