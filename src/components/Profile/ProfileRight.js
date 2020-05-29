import React from "react";
import Editor from "../Editor/Quill.jsx";
import ImageUploading from "react-images-uploading";
import $ from "jquery";
import {config} from "../../config/config";
import axios from "axios";

class ProfileRight extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      token: localStorage.getItem("token")
    }
  }

  setNewStates = () => {
    var workOn = $("#workOn").val();
    var workCategory = $("#workCategory").val();
    var hashTag = $("#hashTag").val();
    var userURL = $("#userURL").val();
    var videoURL = $("#videoURL").val();
    var newState = {
      workOn: workOn,
      workCategory: workCategory,
      hashTag: hashTag,
      userURL: userURL,
      videoURL: videoURL
    }
    this.props.changeState(newState);
  }

  deletePics = async (picId) => {
    if(picId){
      try{
       var url = config.APIurl + "/profile/pics/delete";
       var res = await axios.post(url, {
         picId: picId
       }, {
         headers:{
             Authorization: this.state.token,
             'Content-Type': 'application/json'
       }});
       if(res.data.success){
         console.log("Successfully deleted the picture");
         var filtered =[];
         this.props.savedPics.forEach(element => {
           if(element != picId.pic){
             filtered.push(element);
           }  
         });
         this.props.changeState({
           savedPics: filtered
         })
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

  renderSavedPic = () => {
    let picDiv = "";
    this.props.savedPics.forEach(pic => {
      picDiv += ""
    });
    return picDiv;
  }

  renderVideoURL = () => {
    $("#videoURL").css("visibility", "visible");
  }

  componentDidMount = () => {
    $("#videoURL").css("visibility", "hidden");
  }

  componentWillReceiveProps = () => {
      var userURL = document.getElementById("userURL").value; 
      var workOn = document.getElementById("workOn").value; 
      var workCategory = document.getElementById("workCategory").value; 
      var hashTag = document.getElementById("hashTag").value;
      var videoURL = document.getElementById("videoURL").value;
      document.getElementById("userURL").value = userURL !="" ? userURL : this.props.userURL;
      document.getElementById("workOn").value = workOn != "" ? workOn : this.props.workOn;
      document.getElementById("workCategory").value = workCategory != "" ? workCategory : this.props.workCategory;
      document.getElementById("hashTag").value = hashTag !="" ? hashTag : this.props.hashTag;
  } 

  picChange = (picList) => {
    var newState = {
       pics: picList
    };
    this.props.changeState(newState);
  }

  render() {
    const items = []
    this.props.savedPics.forEach(pic => {
       items.push(<img src={pic} />);
       items.push(<button onClick={() => {this.deletePics({pic})}}></button>);   
    });

    return (
      <div className="uk-width-expand@m uk-grid-margin uk-first-column">
         <div className="uk-card-default rounded">
        <div className="uk-flex uk-flex-between uk-flex-middle py-3 px-4">
          <h5 className="mb-0"> About you</h5>
          {}
        </div>
        <hr className="m-0" />
        <div
          className="uk-child-width-1-1@s uk-grid-small p-4 uk-grid uk-grid-stack"
          uk-grid="true"
        >
          <div className="uk-first-column">
            <h5 className="uk-text-bold mb-2"> What are you working on? </h5>
            <input
              type="text"
              className="uk-input"
              id="workOn"
              placeholder="I'm working to save groundwater"
              onChange={this.setNewStates}
            />
          </div>
          <div className="uk-grid-margin uk-first-column">
            <h5 className="uk-text-bold mb-2"> Choose your work category? </h5>
            <select className="uk-select" id="workCategory" value={this.props.workCategory} onChange={this.setNewStates}>
              {" "}
              <option value="Health Worker">Heath Worker</option> 
              <option value="Social Activist">Social Activist</option>{" "}
              <option value="Environmentalist">Environmentalist</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="uk-grid-margin uk-first-column">
            <h5 className="uk-text-bold mb-2"> Your Hashtag </h5>
            <input type="text" className="uk-input" id="hashTag" placeholder="#SaveWater" id="hashTag" onChange={this.setNewStates}/>
          </div>
          <div className="uk-grid-margin uk-first-column">
            <h5 className="uk-text-bold mb-2"> Your Website </h5>
            <input
              type="text"
              className="uk-input"
              placeholder="www.pledge.com"
              id="userURL"
              onChange={this.setNewStates}
            />
          </div>
          {}
        </div>
      </div>
      {/* STORY */}
      <div className="uk-card-default rounded mt-4">
        <div className="uk-flex uk-flex-between uk-flex-middle py-3 px-4">
          <h5 className="mb-0"> What's your story?</h5>
        </div>
        <div id = "uploaded_pics">
           {/* Loads pictures Load here */}       
           { items.map(item => {
             return item;
           })}
        </div>
        <div className="uk-flex py-2 px-4">
          <div className="uk-flex uk-flex-middle px-4" uk-margin="true" style={{margin: "0 auto"}}>
                 <ImageUploading
                   onChange={this.picChange}
                   maxNumber={5}
                   multiple
                   maxFileSize={5 * 1024 * 1024}
                   acceptType={["jpg", "gif", "png", "jpeg"]}
                 >
                   {({ imageList, onImageUpload, onImageRemoveAll }) => (
                     // write your building UI
                     <div>
                       <button type="button" onClick={onImageUpload} className="btn btn-icon-label uk-margin-small-top uk-first-column mr-1 ml-1">
                         <span className="btn-inner--icon">
                           <i className="icon-feather-image" />
                         </span>
                         <span className="btn-inner--text">Upload Image</span>
                       </button> 
                       {imageList.map((image) => (
                         <div key={image.key}>
                           <img src={image.dataURL} />
                           <button onClick={image.onUpdate}>Update</button>
                           <button onClick={image.onRemove}>Remove</button>
                         </div>
                       ))}
                     </div>
                   )}
      </ImageUploading>

              <button type="button" onClick={this.renderVideoURL} className="btn btn-icon-label uk-margin-small-top uk-first-column mr-1 ml-1">
                <span className="btn-inner--icon">
                  <i className="icon-feather-video" />
                </span>
                <span className="btn-inner--text">Upload Video</span>
              </button>
          </div>
        </div>
        <div>
        <input type="text" id="videoURL" onChange={this.setNewStates}></input>
        </div>
        <Editor
          story = {this.props.story} 
          changeState = {this.props.changeState}
        />
      </div>
      </div>
    );
  }
}

export default ProfileRight;
