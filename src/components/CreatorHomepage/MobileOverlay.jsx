import React from "react";

class MobileOverlay extends React.Component {
  render() {
    return (
      <div
        className="nav-overlay uk-navbar-left uk-position-relative uk-flex-1 bg-grey uk-light p-2"
        hidden
        style={{
          zIndex: 10000
        }}
      >
        <div
          className="uk-navbar-item uk-width-expand"
          style={{
            minHeight: "60px"
          }}
        >
          <form className="uk-search uk-search-navbar uk-width-1-1">
            <input
              className="uk-search-input"
              type="search"
              placeholder="Search..."
              autoFocus
            />
          </form>
        </div>
        <a
          className="uk-navbar-toggle uk-icon uk-close"
          uk-close="true"
          uk-toggle="target: .nav-overlay; animation: uk-animation-fade"
          href="#"
        >
          <svg
            width={14}
            height={14}
            viewBox="0 0 14 14"
            xmlns="http://www.w3.org/2000/svg"
            data-svg="close-icon"
          >
            <line
              fill="none"
              stroke="#000"
              strokeWidth="1.1"
              x1={1}
              y1={1}
              x2={13}
              y2={13}
            />
            <line
              fill="none"
              stroke="#000"
              strokeWidth="1.1"
              x1={13}
              y1={1}
              x2={1}
              y2={13}
            />
          </svg>
        </a>
      </div>
    );
  }
}

export default MobileOverlay;
