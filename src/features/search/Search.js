import React, {Component} from 'react';
import './Search.css'
import {Button, ButtonToolbar, FormControl, FormGroup} from "react-bootstrap";
import SwapiService from "../../services/SwapiService";
import SearchResult from "./SearchResult";
import {Redirect} from "react-router-dom";
import App from "../../App";

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: '',
            planets: []
        };

        this.searchPlanet = this.searchPlanet.bind(this);
    }

    searchPlanet(e) {
        this.setState({searchTerm: e.target.value});

        SwapiService.getPlanets(this.state.searchTerm).then((response) => {
            this.setState({planets: response['results']});
        }).catch((e) => {
            alert(`Error: ${e.message}`);
        })
    }

    render() {
        if (!this.props.isLoggedIn) {
            return (
                <Redirect to={"/"} component={App}/>
            )
        }
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome</h1>
                </header>
                <div className={"search-wrapper"}>
                    <FormGroup>
                        <FormControl type="text" placeholder="Planet" className={"planet-search"}
                                     onChange={this.searchPlanet}/>
                        <ButtonToolbar>
                            <Button bsSize="large" className={"search-button"}
                                    onClick={this.searchPlanet}>Search</Button>
                        </ButtonToolbar>
                    </FormGroup>
                </div>
                <div className={"planet-container"}>
                    <SearchResult planets={this.state.planets}/>
                </div>
            </div>
        );
    }
}

export default Search;
