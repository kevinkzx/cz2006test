import React, {useContext, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Home from "./pages";
import SigninPage from './pages/signIn';
import PackagePage from "./pages/PackagePage";
import {PackageProvider} from "./components/Context/PackageContext";
import SingleParlourPage from "./pages/SingleParlourPage";
import {ParlourProvider} from "./components/Context/ParlourContext";

import ParlourPage from "./pages/ParlourPage";
import SinglePackagePage from "./pages/SinglePackagePage";
import Funeral_processPage from './pages/funeral_process';
import Void_deck_bookingPage from './pages/void_deck_booking';
import Cremation_burialPage from './pages/cremation_burial';
import parlours from './pages/parlours';
import facilitiesPage from './pages/burialAndCremation';
import ashScatteringPage from './pages/ashScattering';
import AuthContext from "./components/Context/AuthContext";
import fire from "./firebase/fire";

/**
 * This component checks if there is currently a user that is logged in.
 * Context wraps the route so that the context can be used throughout the webpage.
 * Route the webpage to different pages.
 * @returns App component
 */
const App = () => {
	const {user, setUser,} = useContext(AuthContext);
	useEffect(() => {
		fire.auth()
		    .onAuthStateChanged(userAuth => {
			    if (!userAuth) {
				    setUser(null);
			    }
			    setUser(userAuth);
		    })

	}, [user]);
	return (
		<>
				<PackageProvider>
					<ParlourProvider>
						<Router>
							<Switch>
								<Route path="/"
								       component={Home}
								       exact/>
								<Route path="/signin"
								       render={() => user ? <Redirect to="/"/> : (<SigninPage/>)}
								       exact/>
								<Route path="/packages"
								       component={PackagePage}
								       exact/>
								<Route exact
								       path="/packages/:slug"
								       component={SinglePackagePage}/>
								<Route path="/parlour/"
								       component={ParlourPage}
								       exact/>
								<Route path="/parlours/:slug"
								       component={SingleParlourPage}
								       exact/>
								<Route exact
								       path="/parlours"
								       component={parlours}/>
								<Route exact
								       path="/burialAndCremation"
								       component={facilitiesPage}/>
								<Route exact
								       path="/ashScattering"
								       component={ashScatteringPage}/>
								<Route path="/funeral_process"
								       component={Funeral_processPage}
								       exact/>
								<Route path="/void_deck_booking"
								       component={Void_deck_bookingPage}
								       exact/>
								<Route path="/cremation_burial"
								       component={Cremation_burialPage}
								       exact/>
							</Switch>
						</Router>
					</ParlourProvider>
				</PackageProvider>
		</>
	);
}

export default App;
