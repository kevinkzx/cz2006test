import React, {useContext, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from "./pages";
import SigninPage from './pages/signIn';
import PackagePage from "./pages/PackagePage";
import {PackageProvider} from "./components/Context/PackageContext";
import SingleParlourPage from "./pages/SingleParlourPage";
import {ParlourProvider} from "./components/Context/ParlourContext";
import {ReviewProvider} from "./components/Context/ReviewContext";

import ParlourPage from "./pages/ParlourPage";
import SinglePackagePage from "./pages/SinglePackagePage";
import funeral_processPage from './pages/funeral_process';
import void_deck_bookingPage from './pages/void_deck_booking';
import cremation_burialPage from './pages/cremation_burial';
import parlours from './pages/parlours';
import facilitiesPage from './pages/burialAndCremation';
import ashScatteringPage from './pages/ashScattering';
import AuthContext from "./components/Context/AuthContext";
import fire from "./firebase/fire";


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
		<ReviewProvider>
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
				</ParlourProvider>
			</PackageProvider>
		</ReviewProvider>
		</>
	);
}

export default App;
