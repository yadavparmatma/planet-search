import React, {Component} from 'react';
import './planet.css'
import {Button, ButtonToolbar, FormControl, FormGroup} from "react-bootstrap";
import SwapiService from "../../services/SwapiService";

class Search extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        SwapiService.getPlanets().then(response => {
            this.props.setPlanets(response);
        }).catch(e => {
            alert(`ERROR: ${e.message}`)
        })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome</h1>
                </header>
                <div className={"search-wrapper"}>
                    <FormGroup>
                        <FormControl type="text" placeholder="Planet" className={"planet-search"}/>
                        <ButtonToolbar>
                            <Button bsSize="large" className={"search-button"}>Search</Button>
                        </ButtonToolbar>
                    </FormGroup>
                </div>
            </div>
        );
    }
}

export default Search;
