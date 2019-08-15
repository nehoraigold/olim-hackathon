import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DrivingPage from "./containers/DrivingPage";
import Navbar from './components/Navbar'
import LandingPage from './containers/LandingPage'
import './App.css';
import ProfilePage from "./containers/ProfilePage";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar/>
				<Switch>
					<Route path={"/profile"} component={ProfilePage}/>
					{/* <Route path="/" component={LandingPage}/> */}
					<Route path="/" component={DrivingPage}/>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
