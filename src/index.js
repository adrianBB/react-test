import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './App';
import footer from './login/footer';
import ComponentLogin from "./content/ComponentLogin";
import ComponentPosition from "./content/ComponentPosition";
import search from "./content/search";
import Custom from "./content/Custom-info";
import Registration from "./content/Registration";
import Details from "./content/Details";

import registerServiceWorker from './registerServiceWorker';
import './index.css';
ReactDOM.render((
	<Router history={hashHistory}>
	  <Route path="/" component={App}/>
	  <Route path="/login" component={footer}/>
	  <Route path="/ComponentLogin" component={ComponentLogin}/>
	  <Route path="/ComponentPosition" component={ComponentPosition}/>
	  <Route path="/search" component={search}/>
	  <Route path="/Custom-info" component={Custom}/>
	  <Route path="/Registration" component={Registration}/>
	  <Route path="/Details" component={Details}/>
	 
	</Router>),
	document.getElementById('root'))

	

registerServiceWorker();
