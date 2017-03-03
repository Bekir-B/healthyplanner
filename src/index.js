import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router';
import Profil from './components/Profil';
import SedmicniIzvjestaj from './components/SedmicniIzvjestaj';
import Login from "./components/Login";
import RegForm from "./components/RegForm";

import App from './App';

ReactDOM.render((
  <Router history={browserHistory}>
       <Route path ="/" component={App}/>
       <Route path ="/Profil" component={Profil}/>
       <Route path ="/SedmicniIzvjestaj" component={SedmicniIzvjestaj}/>
       <Route path ="/Login" component={Login}/>
       <Route path ="/RegForm" component={RegForm}/>
       </Router>),
  document.getElementById('root')
);
