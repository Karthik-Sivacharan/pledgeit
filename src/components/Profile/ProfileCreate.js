import React from "react";
import ProfileLeft from "./ProfileLeft";
import ProfileRight from "./ProfileRight";
import axios from "axios";
import ProfileCreateFooter from "./ProfileCreateFooter";
import {config} from "../../config/config";

class ProfileCreate extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      workOn: "",
      workCategory: "",
      hashTag: "",
      handleId: "",
      userURL: "",
      story: "",
      token: localStorage.getItem("token")
    }
  }

  componentDidMount = async() => {
    console.log("SAFE REDIRECTS LATER")
    try{
      var url = config.APIurl + "/profile/selfDetails/" ;
      var res = await axios.get(url,{ 
      headers:{
          Authorization: this.state.token,
          'Content-Type': 'application/json'
      }
      });
      if(res.data.success){
        var profile = res.data.profile;
        var newState = {
          workOn: profile.workOn,
          workCategory: profile.workCategory,
          hashTag: profile.hashTag,
          handleId: profile.handleId,
          userURL: profile.userURL,
          story: profile.story
        }
        this.changeState(newState);
      }
      else{
        console.log("Invalid user Credentails", res.data.err);
      }
     }
     catch(err){
       console.log("error:", err);
     }
  }

  changeState = (newState) => {
    this.setState(newState);
    this.forceUpdate();
  }

  save = async () => {
    var url = config.APIurl + "/profile/updateProfile";
    this.updateProfile(url);  
  }
   
  publish = async () => {
    var url = config.APIurl + "/profile/updateProfile";
    this.updateProfile(url);
    // and then again publish separately
  } 

  updateProfile = async (url) => {
    var profile = {...this.state};
    delete profile["token"];
    delete profile["handleId"];
    console.log("senmding", profile)
    if(profile){
       try{
        var res = await axios.post(url, profile, {
          headers:{
              Authorization: this.state.token,
              'Content-Type': 'application/json'
        }});
        if(res.data.success){
          console.log("Successfully Update your profile")
        }
        else{
          console.log("Invalid Details",res);
        }
       }
       catch(err){
         console.log("error:", err);
       }
    }
    else{
      console.log("error: Invalid Profile Details")
    }
  }

  render() {
    return (
      <div className="page-content-inner">
        <h2>Setup your page</h2>
        <div uk-grid="true" className="uk-grid uk-grid-stack">
          <ProfileLeft></ProfileLeft>
          <ProfileRight
              workOn = {this.state.workOn}
              workCategory = {this.state.workCategory}
              hashTag = {this.state.hashTag}
              userURL = {this.state.userURL}
              story = {this.state.story}
              changeState = {this.changeState} 
          />
        </div>
        <div uk-grid="true" className="uk-grid uk-grid-stack">
        <button id="publish" onClick={this.publish} className="btn btn-default grey m-auto mb-3">Publish your page</button>
        <button id="save" onClick={this.save} className="btn btn-default grey m-auto mb-3">Save your page</button>
        </div>
        <ProfileCreateFooter></ProfileCreateFooter>
      </div>
    );
  }
}

export default ProfileCreate;
