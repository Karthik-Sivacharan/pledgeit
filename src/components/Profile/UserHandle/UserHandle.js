import React from "react";
import { config } from '../../../config/config';
import $ from "jquery";
import axios from "axios";

class UserHandle extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      validHandle: false,
      handleName: "",
      token: localStorage.getItem("token")
    }
  }

  setHandleName = async () => {
    var handleName = this.state.handleName;
    var validHandle = this.state.validHandle;
    if(validHandle){
       try{
        var url = config.APIurl + "/profile/setHandle/";
        var res = await axios.post(url,{
          handleId: handleName
        },{
          headers:{
              Authorization: this.state.token,
              'Content-Type': 'application/json'
        }});
        if(res.data.success){
          console.log("Successfully Set handle name")
          window.location.href = "/";
        }
        else{
          console.log("Invalid Handle Name",res);
        }
       }
       catch(err){
         console.log("error:", err);
       }
    }
    else{
      console.log("error: Invalid Handle Name")
    }
  }

  NameChangeHandler = async (event) => {
    var handleName = event.target.value;
    document.getElementById("handleTag").innerHTML = "pledge.com/" + handleName;
    var validHandle = false;
    if(handleName){
      try{
          var url = config.APIurl + "/profile/findHandle/" + handleName;
          var res = await axios.get(url,{ 
          headers:{
              Authorization: this.state.token,
              'Content-Type': 'application/json'
          }
          });
          if(!res.data.success){
              throw res.data.msg;
          }
          if(res.data.handleExists){
            validHandle = false;            
          }
          else{
            validHandle = true;
          }
          if(validHandle != this.state.validHandle || handleName != this.state.handleName){
             this.setState({
               handleName: handleName,
               validHandle : validHandle
             });
          }
      }
      catch(err){
        console.log("Error:", err);
      }
    }
    else{
     if(this.state.validHandle){
      this.setState({
        handleName: "",
        validHandle : false
      });
     }
    }

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
              <p className="my-2" id="handleTag">pledge.com/</p>
            </div>
            <div
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
                      color: "#28a745",
                      display: this.state.validHandle  && this.state.handleName !="" ? "block" : "none" 
                    }}
                  >
                    Chosen name is available!
                  </p>
                  <p
                    className="my-2"
                    style={{
                      color: "#FF6347",
                      display: this.state.validHandle || this.state.handleName == "" ? "none" : "block"
                    }}
                  >
                    Name already exists! Pick another one.
                  </p>
                  <button
                    type="submit"
                    defaultValue="Proceed to build your page"
                    className="btn btn-default  btn-block"
                    disabled={!this.state.validHandle}
                    onClick={this.setHandleName}
                  >submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserHandle;
