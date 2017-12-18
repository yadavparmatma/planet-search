import React from "react";
import renderer from 'react-test-renderer';
import {Form, Text} from 'react-form'

import Login from "./Login";


describe('Login', () => {
    it('should match snapshot', async () => {
        const wrapper = renderer.create(<Login />);

        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});
