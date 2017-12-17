import React, {Component} from 'react';
import {Form, Text} from 'react-form'

import './Login.css';
import SwapiService from "../../services/SwapiService";
import {authenticateUser} from "../../utils/user-login";

class Login extends Component {
    constructor(props) {
        super(props);

        this.login = this.login.bind(this);
    }

    login(character) {
        if (character.name === '' || character.password === '') return;

        SwapiService.getCharacter(character.name).then(response => {
            const authenticatedUser = authenticateUser(response.results, character);
            if (authenticatedUser.length === 1) {
                this.props.history.push("search");
                this.props.setLoginStatus(true);
            } else {
                alert("Invalid credentials");
            }
        }).catch(e => {
            alert(`Errror: ${e.message}`);
        });
    };

    render() {
        return (
            <Form className="login" onSubmit={this.login}>
                {({submitForm}) =>
                    (
                        <form className="form-signin" onSubmit={submitForm}>
                            <h3 className="form-signin-heading">Login: using planet character</h3>
                            <Text className="form-control" placeholder={"Username"} field={"name"}/>
                            <Text className="form-control" type={"password"} placeholder={"Password"} field={"password"}/>
                            <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                        </form>
                    )
                }
            </Form>
        );
    }
}

export default Login;
