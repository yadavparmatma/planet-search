import React, {Component} from 'react';
import './search.css'

class SearchResult extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCollapsed: false,
            collapsedPlanetName: ''
        };

        this.collapseItem = this.collapseItem.bind(this);
        this.collapseItemView = this.collapseItemView.bind(this);
    }

    collapseItem(name) {
        this.setState({isCollapsed: !this.state.isCollapsed, collapsedPlanetName: name})
    }

    collapseItemView(planet) {
        return () => {
            if (this.state.isCollapsed && planet.name === this.state.collapsedPlanetName) {
                return (
                    <div className={"planet-detail"}>
                        <hr/>
                        <span className={"name"}>{planet.name}</span>
                        <span className={"population"}>{planet.population}</span>
                        <span className={"terrain"}>{planet.terrain}</span>
                        <span className={"climate"}>{planet.climate}</span>
                    </div>
                )
            } else {
                return (
                    <div className={"population"}>
                        <hr />
                        <span className={"population"}>Planet population: {planet.population}</span>
                    </div>)
            }
        }
    }

    render() {
        return (
            <div className="search-result">
                <ul className={"planet-list"}>
                    {
                        this.props.planets.map((planet, index) => {
                            const population = planet['population'];
                            if (population === 'unknown') return null;
                            return (
                                <li key={index} className={"planet-list-item"} onClick={() => {this.collapseItem(planet.name)}}>
                                    {
                                        this.collapseItemView(planet)()
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default SearchResult;
