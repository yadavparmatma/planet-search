export const planets = (state = [], action) => {
    switch (action.type) {
        case 'SET_PLANETS':
            return Object.assign({}, state, {planets: action.payload.planets});
        default:
            return state
    }
};
