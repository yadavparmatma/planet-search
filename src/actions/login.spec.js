import React from 'react';
import {setLoginStatus} from "./login";

describe('Login Action', () => {
    it('should return with updated state', () => {
        const expectedAction = { type: 'SET_LOGIN_STATUS', payload: { isLoggedIn: true } };

        expect(setLoginStatus(true)).toEqual(expectedAction);
    });
});
