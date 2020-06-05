import React from "react";
import axios from "axios";
import {config} from "../../config/config";
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Navbar from "./Navbar.jsx"
import MobileOverlay from "./MobileOverlay.jsx"
import PageContent from "./PageContent.jsx"

class Main extends React.Component {

  constructor(props){
    super(props);
    this.state={
      workOn: "",
      workCategory: "",
      hashTag: "",
      handleId: "",
      userURL: "",
      story: "",
      savedPics: [],
      videoURL: "",
      color: "",
      savedprofilePic: "",
      token: localStorage.getItem("token"),
      username: localStorage.getItem("username")
    }
  }
  componentWillMount = async () => {
    try{
      var url = config.APIurl + "/profile/selfDetails/" ;
      var res = await axios.get(url,{ 
      headers:{
          Authorization: this.state.token,
          'Content-Type': 'application/json'
      }
      });
      if(res.data.success){
        console.log(res.data)
        var profile = res.data.profile;
        var newState = {
          workOn: profile.workOn,
          workCategory: profile.workCategory,
          hashTag: profile.hashTag,
          handleId: profile.handleId,
          userURL: profile.userURL,
          story: profile.story,
          savedPics: profile.pics,
          videoURL: profile.videoURL,
          color: profile.color,
          savedprofilePic: profile.savedprofilePic
        }
        this.setState(newState);
        this.forceUpdate();
      }
      else{
        console.log(res.data)
        console.log("Invalid user Credentails", res.data.err);
      }
    }
    catch(err){
      console.log("error:", err);
    }
  }


  render() {
    return (
        <div >
            <Navbar
            
            />
            <div id="wrapper" className="mm-page mm-slideout">
            <Header
              profilePic={this.state.savedprofilePic}  
            />
            <MobileOverlay />
            <PageContent 
              profile={this.state}
            />
            <Footer />
            </div>
        </div>
    );
  }
}

export default Main;
