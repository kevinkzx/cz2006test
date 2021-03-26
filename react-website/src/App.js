import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./pages";
import SigninPage from './pages/signin';
import PackagePage from "./pages/PackagePage";
import PackageContext, {PackageProvider} from "./components/Context/PackageContext";
import SinglePackagePage from "./pages/SinglePackagePage";

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
					</Switch>
				</Router>
			</PackageProvider>
		</>
	);
}

export default App;
