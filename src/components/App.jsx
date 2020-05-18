import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import ProfileCreate from "./Profile/ProfileCreate.js"
import Main from "./CreatorHomepage/Main.jsx"
import SignUp from "./SignUp/SignUp.js"
import Login from "./LogIn/LogIn.js"


function App() {
    return (
        <Router >
            
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/create_profile" component={ProfileCreate} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/login" component={Login} />
                </Switch>

        </Router>

    );
}

export default App;