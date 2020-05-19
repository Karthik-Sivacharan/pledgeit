import React from "react";

class UserHandle extends React.Component {

  state = {
    handlename: "handlename",
  }

  NameChangeHandler = (event) => {
    this.setState({handlename: event.target.value});
  }


  render() {
    return (
      <div
        uk-height-viewport="expand: true"
        className="uk-flex uk-flex-middle"
        data-height-expand="true"
        style={{
          minHeight: "300px"
        }}
      >
        <div className="uk-width-1-3@m uk-width-1-2@s m-auto">
          <div className="uk-card-default p-5 rounded">
            <div className="mb-4 uk-text-center">
              <h3 className="mb-0"> Choose your Handle Name </h3>
              <p className="my-2">pledge.com/{this.state.handlename}</p>
            </div>
            <form
              className="uk-child-width-1-1 uk-grid-small uk-grid uk-grid-stack"
              uk-grid="true"
            >
              <div className="uk-first-column">
                <div className="uk-form-group">
                  <div className="uk-position-relative w-100">
                    <span className="uk-form-icon">
                      <i className="icon-feather-link" />
                    </span>
                    <input className="uk-input" type="text" onChange={this.NameChangeHandler}/>
                  </div>
                </div>
              </div>
              <div className="uk-grid-margin uk-first-column">
                <div className="uk-text-center">
                <p
                    className="my-2"
                    style={{
                      color: "#28a745"
                    }}
                  >
                    Chosen name is available!
                  </p>
                  <p
                    className="my-2"
                    style={{
                      color: "#FF6347"
                    }}
                  >
                    Name already exists! Pick another one.
                  </p>
                  <input
                    type="submit"
                    defaultValue="Proceed to build your page"
                    className="btn btn-default  btn-block"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UserHandle;
