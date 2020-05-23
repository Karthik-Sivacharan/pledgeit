import React from "react";
import {config} from "../../../config/config";
import axios from "axios";
class UserType extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      token: localStorage.getItem("token")
    }
  }

  setUserType = async(userType) => {
    if(userType){
      try{
       var url = config.APIurl + "/profile/setUserType";
       var res = await axios.post(url,{
         userType: userType
       },{
         headers:{
             Authorization: this.state.token,
             'Content-Type': 'application/json'
       }});
       if(res.data.success){
         console.log("Successfully Set user type")
       }
       else{
         console.log("Invalid user type", res.data.err);
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
              <h3 className="mb-0"> I'm here to </h3>
              {}
            </div>
            <form
              className="uk-child-width-1-1 uk-grid-small uk-grid uk-grid-stack"
              uk-grid="true"
            >
              <div
                className="uk-width-1-2@s uk-grid-margin uk-first-column"
                style={{
                  cursor: "pointer"
                }}
              >
                <div
                  className="uk-box-shadow-small uk-box-shadow-hover-large uk-padding"
                  style={{
                    minHeight: "100%"
                  }}
                  onClick={() => {this.setUserType(1)}}
                >
                  <h6
                    style={{
                      color: "#6c757d",
                      textAlign: "center"
                    }}
                  >
                    Recieve Donations
                  </h6>
                </div>
              </div>
              <div
                className="uk-width-1-2@s uk-grid-margin uk-first-column"
                style={{
                  cursor: "pointer"
                }}
              >
                <div
                  className="uk-box-shadow-small uk-box-shadow-hover-large uk-padding"
                  style={{
                    minHeight: "100%"
                  }}
                  onClick={() => {this.setUserType(2)}}
                >
                  <h6
                    style={{
                      color: "#6c757d",
                      textAlign: "center",
                      verticalAlign: "middle"
                    }}
                  >
                    Donate
                  </h6>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UserType;
