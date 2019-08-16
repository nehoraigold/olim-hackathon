import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DrivingPage from "./containers/DrivingPage";
import Navbar from './components/Navbar'
import LandingPage from './containers/LandingPage'
import './App.css';
import Profile from "./containers/ProfilePage";
import Categories from './containers/Categories';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar/>
				<Switch>
					<Route exact path="/profile" component={Profile}/>
					<Route exact path="/driving" component={DrivingPage}/>
					<Route exact path="/categories" component={Categories}/>
					<Route exact path="/" component={LandingPage}/>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
