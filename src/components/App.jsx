import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import ProfileCreate from "./Profile/ProfileCreate.js"
import Main from "./CreatorHomepage/Main.jsx"
import SignUp from "./SignUp/SignUp.jsx"


function App() {
    return (
        <Router >
            
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/create_profile" component={ProfileCreate} />
                    <Route path="/signup" component={SignUp} />
                </Switch>

        </Router>

    );
}

export default App;