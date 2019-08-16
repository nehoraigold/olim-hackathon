import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DrivingPage from "./containers/DrivingPage";
import Navbar from './components/Navbar'
import LandingPage from './containers/LandingPage'
import './App.css';
import Categories from './containers/Categories';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar/>
				<Switch>
					<Route path="/" component={LandingPage}/>
					{/* <Route path="/" component={DrivingPage}/> */}
					{/* <Route path="/" component={Categories}/> */}
				</Switch>
			</div>
		</Router>
	);
}

export default App;
