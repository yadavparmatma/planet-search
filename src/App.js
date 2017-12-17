import React, {Component} from 'react';

import './App.css';
import {Route} from "react-router-dom";
import LoginContainer from "./features/login/LoginContainer";

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome</h1>
                </header>
                <Route path={"/"} render={(props) => <LoginContainer {...props} />}/>
            </div>
        );
    }
}

export default App;
