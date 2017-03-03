import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute, Link} from 'react-router';
import Login from './views/login/view';
import Root from './root';

ReactDOM.render((
        <Router history={browserHistory}>
            <Route path="/" component={Root}/>
            <Route path="/login" component={Login}/>
        </Router>),
    document.getElementById('root')
);
