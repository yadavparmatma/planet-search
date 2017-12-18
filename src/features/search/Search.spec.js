import React from "react";
import renderer from 'react-test-renderer';
import Search from "./Search";


describe('Search', () => {
    it('should match snapshot', () => {
        const wrapper = renderer.create(<Search isLoggedIn={true}/>);

        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});
