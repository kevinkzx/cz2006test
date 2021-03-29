import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./pages";
import SigninPage from './pages/signin';
import PackagePage from "./pages/PackagePage";
import PackageContext, {PackageProvider} from "./components/Context/PackageContext";
import ParlourPage from "./pages/ParlourPage";
import SingleParlour from "./pages/SingleParlour";
//import Parlour from './components/Parlour/Parlour';

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
					<Route path="/parlour/"
					       component={ParlourPage}
					       exact/>
					<Route path="/parlour/:slug"
					       component={SingleParlour}
					       exact/>
				</Switch>
			</Router>
		</PackageProvider>
			</>
	);
}

export default App;
