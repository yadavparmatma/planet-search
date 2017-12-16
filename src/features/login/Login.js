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
        SwapiService.getCharacter(character.name).then(response => {
            const authenticatedUser = authenticateUser(response.results, character);
            authenticatedUser.length === 1 ? this.props.history.push("search") : alert("Invalid credentials");
        }).catch(e => {
            alert(`Errror: ${e.message}`)
        });
    };

    render() {
        return (
            <Form className="Login" onSubmit={this.login}>
                {({submitForm}) =>
                    (<form onSubmit={submitForm}>
                        <Text className={"userName"} placeholder={"Username"} field={"name"}/>
                        <Text className={"password"} type={"password"} placeholder={"Password"} field={"password"}/>
                        <button className="login-button" type="submit">Login</button>
                    </form>)
                }
            </Form>
        );
    }
}

export default Login;
