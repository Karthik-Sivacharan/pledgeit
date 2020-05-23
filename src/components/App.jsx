import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import ProfileCreate from "./Profile/ProfileCreate.js"
import UserType from "./Profile/UserType/UserType.js"
import HomeRoute from "./homeRoute"
import UserHandle from "./Profile/UserHandle/UserHandle.js"
import SignUp from "./SignUp/SignUp.js"
import Login from "./LogIn/LogIn.js"


class App extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
          isLoggedin: false,
          username: "",
          token: "",
          profileStatus: ""
        };
    }

    componentDidMount = () => {
        if (localStorage.getItem("token") != undefined && localStorage.getItem("token") != "") {
            this.setState({
              isLoggedin: true,
              token: localStorage.getItem("token"),
              profileStatus: localStorage.getItem("profileStatus"),
              username: localStorage.getItem("username")
            })
        }
        else{
            this.setState({
                isLoggedin: false,
                token: "",
                profileStatus: "",
                username: ""
            })
        }
    }  

    
    async handleAuthenticationSuccess (username, token)  {
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        this.setState({
            isLoggedin: true
        });
    }

    setProfileStatus (profileStatus) {
        localStorage.setItem("profileStatus", profileStatus);
        this.setState({
            profileStatus: profileStatus
        });
    }

    render(){
        return (
            <Router >
                    <Switch>
                        <Route path="/" exact component={() => (<HomeRoute token={this.state.token} username={this.state.username} isLoggedin={this.state.isLoggedin} setProfileStatus={this.setProfileStatus}/>)} />
                        <Route path="/create_profile" component={ProfileCreate} />
                        <Route path="/user_type" component={UserType} />
                        <Route path="/user_handle" component={UserHandle} />
                        <Route path="/signup" component={() => (<SignUp handleAuthenticationSuccess={this.handleAuthenticationSuccess} isLoggedin={this.state.isLoggedin}/>)} />
                        <Route path="/login" component={() => (<Login handleAuthenticationSuccess={this.handleAuthenticationSuccess} isLoggedin={this.state.isLoggedin}/>)} />
                    </Switch>
    
            </Router>
        );
    }
}

export default App;