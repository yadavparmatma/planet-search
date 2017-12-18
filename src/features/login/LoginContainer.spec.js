
import {mapDispatchToProps} from "./LoginContainer";

describe('LoginContainer', () => {

    describe('mapDispatchToProps', () => {
        it('should map setLoginStatus to props', () => {
            const dispatch = jest.fn();
            const props = mapDispatchToProps(dispatch);
            const action = {"payload": {"isLoggedIn": true}, "type": "SET_LOGIN_STATUS"};

            props.setLoginStatus(true);
            expect(dispatch).toHaveBeenCalledWith(action);

        });
    });

});
