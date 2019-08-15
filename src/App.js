import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DrivingPage from "./containers/DrivingPage";
import Navbar from './components/Navbar'
import LandingPage from './containers/LandingPage'
import './App.css';

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/" component={LandingPage}/>
					{/* <Route path="/driving" component={DrivingPage}/> */}
				</Switch>
			</div>
		</Router>
	);
}

export default App;
