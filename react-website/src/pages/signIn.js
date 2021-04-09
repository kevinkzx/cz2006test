import React, {useContext} from "react";
import Login from '../components/Signin/Login';
import Hero from '../components/Signin/Hero';
import AuthContext from "../components/Context/AuthContext";

const SignIn = () => {
	const {
		user,
		email,
		password,
		setEmail,
		handleLogout,
		handleSignup,
		hasAccount,
		setPassword,
		handleLogin,
		setHasAccount,
		emailError,
		passwordError
	} = useContext(AuthContext);


	return (
		<div className="signIn">
			{user ? (
				<Hero handleLogout={handleLogout}/>
			) : (
				<Login email={email}
				       setEmail={setEmail}
				       password={password}
				       setPassword={setPassword}
				       handleLogin={handleLogin}
				       handleSignup={handleSignup}
				       hasAccount={hasAccount}
				       setHasAccount={setHasAccount}
				       emailError={emailError}
				       passwordError={passwordError}/>
			)}
		</div>
	);
};

export default SignIn;