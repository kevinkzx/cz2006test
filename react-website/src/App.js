import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./pages";
import SignInPage from './pages/signin';
import PackagePage from "./pages/PackagePage";
import {PackageProvider} from "./components/Context/PackageContext";
import SinglePackagePage from "./pages/SinglePackagePage";
import funeral_processPage from './pages/funeral_process';
import void_deck_bookingPage from './pages/void_deck_booking';
import cremation_burialPage from './pages/cremation_burial';
import parlourPage from './pages/parlours';
import facilitiesPage from './pages/burialAndCremation';
import ashScatteringPage from './pages/ashScattering';

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
						<Route path="/SignIn"
						       component={SignInPage}
						       exact/>
						<Route path="/packages"
						       component={PackagePage}
						       exact/>
						<Route exact
						       path="/packages/:slug"
						       component={SinglePackagePage}/>
						<Route exact
						       path="/parlours"
						       component={parlourPage}/>
						<Route exact
						       path="/burialAndCremation"
						       component={facilitiesPage}/>
						<Route exact
						       path="/ashScattering"
						       component={ashScatteringPage}/>
						<Route path="/funeral_process"
						       component={funeral_processPage}
						       exact/>
						<Route path="/void_deck_booking"
						       component={void_deck_bookingPage}
						       exact/>
						<Route path="/cremation_burial"
						       component={cremation_burialPage}
						       exact/>
					</Switch>
				</Router>
			</PackageProvider>
		</>
	);
}

export default App;
