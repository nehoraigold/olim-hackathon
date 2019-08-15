import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DrivingPage from "./containers/DrivingPage";
import Navbar from './components/Navbar'
import LandingPage from './containers/LandingPage'
import './App.css';
import CategoriesPage from './containers/CategoriesPage';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar/>
				<Switch>
					{/* <Route path="/" component={LandingPage}/> */}
					<Route path="/" component={DrivingPage}/>
					{/* <Route path="/" component={CategoriesPage}/> */}
				</Switch>
			</div>
		</Router>
	);
}

export default App;
