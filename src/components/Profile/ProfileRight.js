import React from "react";
import Editor from "../Editor/Quill.jsx"
import $ from "jquery";

class ProfileRight extends React.Component {
  constructor(props){
    super(props);
  }

  setNewStates = () => {
    var workOn = $("#workOn").val();
    var workCategory = $("#workCategory").val();
    var hashTag = $("#hashTag").val();
    var userURL = $("#userURL").val();
    var newState = {
      workOn: workOn,
      workCategory: workCategory,
      hashTag: hashTag,
      userURL: userURL
    }
    this.props.changeState(newState);
  }

  componentWillReceiveProps = () => {
      var userURL = document.getElementById("userURL").value; 
      var workOn = document.getElementById("workOn").value; 
      var workCategory = document.getElementById("workCategory").value; 
      var hashTag = document.getElementById("hashTag").value;
      document.getElementById("userURL").value = userURL !="" ? userURL : this.props.userURL;
      document.getElementById("workOn").value = workOn != "" ? workOn : this.props.workOn;
      document.getElementById("workCategory").value = workCategory != "" ? workCategory : this.props.workCategory;
      document.getElementById("hashTag").value = hashTag !="" ? hashTag : this.props.hashTag;
  } 

  render() {
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
            <select className="uk-select" id="workCategory" onChange={this.setNewStates}>
              {" "}
              <option>Heath Worker</option> <option>Social Activist</option>{" "}
              <option>Environmentalist</option>
              <option>Other</option>
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
        <div className="uk-flex py-2 px-4">

          <div className="uk-flex uk-flex-middle px-4" uk-margin="true" style={{margin: "0 auto"}}>
          
              <button type="button" className="btn btn-icon-label uk-margin-small-top uk-first-column mr-1 ml-1">
                <span className="btn-inner--icon">
                  <i className="icon-feather-image" />
                </span>
                <span className="btn-inner--text">Upload Image</span>
              </button>

              <button type="button" className="btn btn-icon-label uk-margin-small-top uk-first-column mr-1 ml-1">
                <span className="btn-inner--icon">
                  <i className="icon-feather-video" />
                </span>
                <span className="btn-inner--text">Upload Video</span>
              </button>

          </div>
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
