import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import ProfileCreate from "./Profile/ProfileCreate.js"
import UserType from "./Profile/UserType/UserType.js"
import UserHandle from "./Profile/UserHandle/UserHandle.js"
import Main from "./CreatorHomepage/Main.jsx"
import SignUp from "./SignUp/SignUp.js"
import Login from "./LogIn/LogIn.js"


class App extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
          isLoggedin: false,
          username: "",
          token: ""
        };
        if (localStorage.getItem("token") != undefined && localStorage.getItem("token") != "") {
          this.setState({
            isLoggedin: true,
            token: localStorage.getItem("token")
          })
        }
    }
    
    handleAuthenticationSuccess = (username, token) => {
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        this.setState({
            isLoggedin: true,
            username: username,
            token: token
        })
    }

    render(){
        return (
            <Router >
                    <Switch>
                        <Route path="/" exact component={Main} />
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