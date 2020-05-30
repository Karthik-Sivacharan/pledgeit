import React from "react";
import Avatar from 'react-avatar';

class ProfileLeft extends React.Component {


  updatePic = async() => {
     try{
      var profilePic = document.getElementById("profilePic");
      const reader = new FileReader();
      var fReader = new FileReader();
      fReader.readAsDataURL(profilePic.files[0]);
      fReader.onloadend = (event) => {
          profilePic = event.target.result;
          var newState = {
            profilePic: profilePic
          }
          this.props.changeState(newState);
      }
     }
     catch(err){
       console.log(err);
     }
  }

  updateProfileLeft = async() => {
    try{
          var color = document.querySelector('input[name="radio2"]:checked').value;
          var newState = {
            color: color
          }
          console.log("setting", newState);
          this.props.changeState(newState);
    }
    catch(err){
      console.log(err);
    }
  }

  componentWillReceiveProps = () => {
    if(document.getElementById("profilePic").value == ""){
      // this.props.profilePic has the url of uploaded profilePic;
      // render it whereever needed
    }
    var color; 
    if(document.querySelector('input[name="radio2"]:checked'))
      color = document.querySelector('input[name="radio2"]:checked').value;
    else
      color = "";
    if(color == "" || color == undefined){
      color = this.props.color;
    }
    color =  color.split("#")[1];
    if(color != "" && color != undefined && document.getElementById( color))
      document.getElementById(color).checked = true;
    if(this.props.handleId != ""){
         document.getElementById("handleId").innerHTML = "pledge.com/" + this.props.handleId;
    }
    else{
      document.getElementById("handleId").innerHTML = "pledge.com/";
    }
  }


  render() {
    var username = localStorage.getItem("username");
    return (
      <div className="uk-width-2-5@m uk-first-column">
        <div className="uk-card-default rounded text-center p-4">
        <div className="uk-position-relative my-4">
          <div className="user-profile-photo  m-auto">
            {/* <img src="images/home-profile.jpg" alt="true" /> */}
            <Avatar name={username} size="150" textSizeRatio={1.75} textMarginRatio={0.2} round="100px" />
          </div>
          <h4 className="mb-2 mt-3"> {username} </h4>
          <div className="uk-position-center" style={{marginTop: "15px"}}>
            <div uk-form-custom="true" className="uk-form-custom">
              <input type="file" id="profilePic" accept="image/x-png,image/gif,image/jpeg"  onChange={this.updatePic}/>
              <span className="uk-link icon-feather-camera icon-semi-medium text-white">
              </span>
            </div>
          </div>
          <p className="m-0" id="handleId"></p>
        </div>
      </div>

        {/* Theme */}
        <div className="uk-card-default rounded mt-5">
        <div className="uk-flex uk-flex-between uk-flex-middle py-3 px-4">
          <h5 className="mb-0"> Choose your theme</h5>
          {}
        </div>
        <hr className="m-0" />
        <div className="p-3">
          <div
            className="uk-grid-small uk-flex-middle uk-grid uk-grid-stack"
            uk-grid="true"
          >
            <div className="uk-width-auto uk-first-column">
              <button
                type="button"
                className="btn btn-warning btn-icon-only"
                style={{
                  backgroundColor: "#fe5f55"
                }}
              ></button>
            </div>
            <div className="uk-width-expand uk-grid-margin uk-first-column">
              <input onChange={this.updateProfileLeft} className="uk-radio" type="radio" id="fe5f55" value="#fe5f55" name="radio2" />
            </div>
            <div className="uk-width-auto uk-first-column">
              <button
                type="button"
                className="btn btn-warning btn-icon-only"
                style={{
                  backgroundColor: "#fdb44b"
                }}
              ></button>
            </div>
            <div className="uk-width-expand uk-grid-margin uk-first-column">
              <input onChange={this.updateProfileLeft} className="uk-radio" type="radio" id="fdb44b" value="#fdb44b" name="radio2" />
            </div>
            <div className="uk-width-auto uk-first-column">
              <button
                type="button"
                className="btn btn-warning btn-icon-only"
                style={{
                  backgroundColor: "#5F7FFF"
                }}
              ></button>
            </div>
            <div className="uk-width-expand uk-grid-margin uk-first-column">
              <input onChange={this.updateProfileLeft} className="uk-radio" type="radio" id="5F7FFF" value="#5F7FFF" name="radio2" />
            </div>
          </div>
          <div
            className="uk-grid-small uk-flex-middle uk-grid uk-grid-stack"
            uk-grid="true"
          >
            <div className="uk-width-auto uk-first-column">
              <button
                type="button"
                className="btn btn-warning btn-icon-only"
                style={{
                  backgroundColor: "#be79df"
                }}
              ></button>
            </div>
            <div className="uk-width-expand uk-grid-margin uk-first-column">
              <input onChange={this.updateProfileLeft} className="uk-radio" type="radio" id="be79df" value="#be79df" name="radio2" />
            </div>
            <div className="uk-width-auto uk-first-column">
              <button
                type="button"
                className="btn btn-warning btn-icon-only"
                style={{
                  backgroundColor: "#11999e"
                }}
              ></button>
            </div>
            <div className="uk-width-expand uk-grid-margin uk-first-column">
              <input onChange={this.updateProfileLeft} className="uk-radio" type="radio" id="11999e" value="#11999e" name="radio2" />
            </div>
            <div className="uk-width-auto uk-first-column">
              <button
                type="button"
                className="btn btn-warning btn-icon-only"
                style={{
                  backgroundColor: "#f85e9f"
                }}
              ></button>
            </div>
            <div className="uk-width-expand uk-grid-margin uk-first-column">
              <input onChange={this.updateProfileLeft} className="uk-radio" type="radio" id="f85e9f" value="#f85e9f" name="radio2" />
            </div>
          </div>
        </div>
      </div>
       

      <div className="uk-card-default rounded mt-5">
        <div className="uk-flex uk-flex-between uk-flex-middle py-3 px-4">
          <h5 className="mb-0"> Setup your billing</h5>
          <a
            href="#"
            uk-tooltip="title:You will recieve donations to this account; pos: left"
            title="true"
            aria-expanded="false"
          >
            {" "}
            <i className="icon-material-outline-info" />{" "}
          </a>
          {}
        </div>
        <hr className="m-0" />
        <div className="p-3">
          <div
            className="uk-grid-small uk-flex-middle uk-grid uk-grid-stack"
            uk-grid="true"
          >
            <div className="uk-grid-small uk-flex-middle" uk-grid="true">
              <div className="uk-width-auto">
                <button
                  type="button"
                  className="btn btn-danger btn-icon-only"
                  style={{
                    backgroundColor: "#3e416d",
                    border: "#3e416d"
                  }}
                >
                  <span className="d-flex justify-content-center">
                    <i className="icon-material-outline-account-balance" />
                  </span>
                </button>
              </div>
              <div className="uk-width-expand">
                <h5 className="mb-2"> Bank Account </h5>
              </div>
            </div>
          </div>
          <div
            className="uk-grid-small uk-flex-middle uk-grid uk-grid-stack"
            uk-grid="true"
          >
            <div className="uk-grid-small uk-flex-middle" uk-grid="true">
              <div className="uk-width-auto">
                <button
                  type="button"
                  className="btn btn-danger btn-icon-only"
                  style={{
                    backgroundColor: "#3e416d",
                    border: "#3e416d"
                  }}
                >
                  <span className="d-flex justify-content-center">
                    <i className="icon-line-awesome-cc-paypal" />
                  </span>
                </button>
              </div>
              <div className="uk-width-expand">
                <h5 className="mb-2"> PayPal </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default ProfileLeft;
