import React from "react";

class OAuth extends React.Component {
  render() {
    return (
      <div className="uk-text-center" style={{paddingLeft: '0px'}}>
      <div className="uk-position-relative w-100">
        <button
          type="button"
          className="btn btn-facebook btn-icon-label mb-2" style={{margin: '2px'}} 
        >
          <span className="btn-inner--icon">
            <i className="icon-brand-facebook-f" />
          </span>
          <span className="btn-inner--text">Facebook</span>
        </button>
        <button
          type="button"
          className="btn btn-google-plus btn-icon-label mb-2" style={{margin: '2px'}}
        >
          <span className="btn-inner--icon">
            <i className="icon-brand-google" />
          </span>
          <span className="btn-inner--text">Google </span>
        </button>
        <button 
          type="button" 
          className="btn btn-twitter btn-icon-label mb-2" style={{margin: '2px'}}
        >
          <span className="btn-inner--icon">
            <i className="icon-brand-twitter" />
          </span>
          <span className="btn-inner--text">Twitter</span>
        </button>
        <div className="uk-width-expand@s uk-first-column mt-3">
          <p>
            Already have an account? <a href="#">Login</a>
          </p>
        </div>
      </div>
      </div>
    );
  }
}

export default OAuth;
