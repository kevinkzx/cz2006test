import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./pages";
import SigninPage from './pages/signin';
import PackagePage from "./pages/PackagePage";
import PackageContext, {PackageProvider} from "./components/Context/PackageContext";
import SinglePackagePage from "./pages/SinglePackagePage";
import funeral_processPage from './pages/funeral_process';
import void_deck_bookingPage from './pages/void_deck_booking';
import cremation_burialPage from './pages/cremation_burial';
import MapPage from './pages/map';

// import Navbar from "./components/Navbar";

function App() {
	return (
		<>
		<PackageProvider>
			<Router>
				{/*<Navbar/>*/}
				<Switch>
					<Route path="/"
					       component={Home}
					       exact/>
					<Route path="/signin"
					       component={SigninPage}
					       exact/>
					<Route path="/packages"
					       component={PackagePage}
					       exact/>
					<Route exact
						   path="/packages/:slug"
						   component={SinglePackagePage}/>
					<Route path="/funeral_process" component={funeral_processPage } exact/>
					<Route path="/void_deck_booking" component={void_deck_bookingPage} exact />
					<Route path="/cremation_burial" component={cremation_burialPage} exact />
					<Route path="/map"
						   component={MapPage}
						   exact/>
				</Switch>
			</Router>
		</PackageProvider>
			</>
	);
}

export default App;
