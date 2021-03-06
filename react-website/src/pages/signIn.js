import React, {useContext} from "react";
import Login from '../components/Signin/Login';
import AuthContext from "../components/Context/AuthContext";

/**
 * This is the page for user to sign in
 * @returns SignIn
 */
const SignIn = () => {
	const {
		user,
		email,
		password,
		setEmail,
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
		</div>
	);
};

export default SignIn;