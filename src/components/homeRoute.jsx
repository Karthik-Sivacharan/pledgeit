import React, { Component } from 'react';
import { config } from '../config/config';
import Main from "./CreatorHomepage/Main.jsx"
import $ from "jquery";

export default class homeRoute extends Component {

    constructor(props){
        super(props);
        this.state = {
            profileStatus: this.props.profileStatus,
            token: this.props.token,
            username: this.props.username,
            isLoggedin: this.props.isLoggedin,
            isLoading: true
        }
    }




    componentDidMount = () => {

        var renderStates = () => {
            var profileStatus = localStorage.getItem("profileStatus");
            var profileState = localStorage.getItem("profileState");
            var newState= {};
            if(profileStatus != undefined || profileStatus != "" || profileStatus == null){
                newState.profileStatus = profileStatus;
                newState.isLoading = false;
            }
            if(profileState != undefined || profileState != "" || profileState == null){
                newState.profileState = profileState;
                newState.isLoading = false;
            }
            if(newState.profileState != this.state.profileState || newState.profileStatus != this.state.profileStatus){
              this.setState(newState);
            }
        }

        try{
            $.ajax({
                url: config.APIurl + '/profile/profileStatus',
                type: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: this.state.token
                },
                success: async function (res) {
                  if(res.success){
                    localStorage.setItem("profileStatus", res.profile.profileStatus);
                    renderStates();
                  }
                },
                error: function (err) {
                    console.log(err);
                }
            })
            $.ajax({
                url:  config.APIurl + '/profile/profileState',
                type: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: this.state.token
                },
                success: async function (res) {
                  if(res.success){
                    localStorage.setItem("profileState", res.profileState);
                    renderStates();
                  }
                },
                error: function (err) {
                    console.log(err);
                }
            })
        }
        catch(err){
            console.log("error:",err);
        }
    }    

    render() {
       var isLoading = this.state.isLoading;
       var token = this.state.token;
       var username = this.state.username;
       var profileStatus = this.state.profileStatus;
       var profileState = this.state.profileState;
       if(isLoading){
           return(
           <div>Loading</div>
           )
        }
       else if(token == undefined || token == "")
            return(
                <h1>hello</h1>
            )
       else if(profileState != 0){
            return(
                <Main/>
            )
       }
       else{
           return(
             <h1>hellobye</h1>
           )
       }
    }
}
