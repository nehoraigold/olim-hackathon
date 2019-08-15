import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DrivingPage from "./containers/DrivingPage";
import './App.css';

function App() {
	return (
		<Router>
			<div className="App">
				{/*<Navbar/>*/}
				<Switch>
					{/*<Route path="/" component={LandingPage}/>*/}
					<Route path="/" component={DrivingPage}/>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
