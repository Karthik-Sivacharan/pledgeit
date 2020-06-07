import React, { Component } from 'react';
import { config } from '../config/config';
import Main from "./CreatorHomepage/Main.jsx";
import UserType from "./Profile/UserType/UserType.js";
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

        var time = localStorage.getItem("time");
        console.log(time)
        if(time){
           var cur = new Date();
           if(cur - time > 86400000 ){
               localStorage.clear();
           }
        }
        var renderStates = () => {
            var profileStatus = localStorage.getItem("profileStatus");
            var profileState = localStorage.getItem("profileState");
            var newState= {};
                newState.profileStatus = profileStatus;
                newState.isLoading = false;
                newState.profileState = profileState;
                newState.isLoading = false;
                this.setState(newState);
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
                  }
                  renderStates();
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
                  }
                  renderStates();
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
       console.log(profileState)
       if(isLoading){
           return(
           <div>Loading</div>
           )
        }
       if(token == undefined || token == "" || !token){
           console.log("changing");
            window.location.href = "/login";
       }
       else if(profileStatus == 0){
            window.location.href = "/user_handle";
       }
       else if(profileState != 0){
            return(
                <Main />
            )
       }
       else if(profileState == 0)
           window.location.href = "/user_type";

       else{
           return(
             <h1>hellobye</h1>
           )
       }
    }
}
