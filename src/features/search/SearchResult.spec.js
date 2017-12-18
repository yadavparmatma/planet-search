import React from "react";
import renderer from 'react-test-renderer';
import SearchResult from "./SearchResult";


describe('Search', () => {
    it('should match snapshot', () => {
        const planets = [{"population":20000}, {"population":200}, {"population":190}]
        const wrapper = renderer.create(<SearchResult isLoggedIn={true} planets={planets}/>);

        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});
