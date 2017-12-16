export const login = (state = false, action) => {
    switch (action.type) {
        case 'SET_LOGIN_STATUS':
            return Object.assign({}, state, {isLoggedIn: action.payload.isLoggedIn});
        default:
            return state
    }
};
