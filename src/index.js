import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';

import './index.css';
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import rootReducer from "./reducers/root-reducer";
import SearchContainer from "./features/search/SearchContainer";

const store = createStore(combineReducers({app: rootReducer}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/search" render={(props) => <SearchContainer {...props}/>}/>
                <Route exact path="/" render={(props) => <App {...props}/>}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
)
;
registerServiceWorker();
