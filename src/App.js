import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import DrivingPage from "./containers/DrivingPage";
import './App.css';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar/>
				<Switch>
					<Route path="/" component={LandingPage}/>
					<Route path="/driving" component={DrivingPage}/>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
