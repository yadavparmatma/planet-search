import {mapStateToProps} from "./SearchContainer";

describe('SearchContainer', () => {
    describe('mapState', () => {
        it('should map isLoggedIn to props for false', () => {
            const state = {
                app: {
                    login: {
                        isLoggedIn: false
                    }
                }
            };
            const props = mapStateToProps(state);
            expect(props.isLoggedIn).toBe(false);
        });

        it('should map isLoggedIn to props for true', () => {
            const state = {
                app: {
                    login: {
                        isLoggedIn: true
                    }
                }
            };
            const props = mapStateToProps(state);
            expect(props.isLoggedIn).toBe(true);
        });
    });
});