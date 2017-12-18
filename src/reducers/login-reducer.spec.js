import {login} from "./login-reducer"

describe('Login', () => {
    it('should return login status', () => {
        const newState = {isLoggedIn: true};

        const action = {
            type: 'SET_LOGIN_STATUS',
            payload: {
                isLoggedIn:true
            }
        };

        expect(login({}, action)).toEqual(newState);
    });
});
