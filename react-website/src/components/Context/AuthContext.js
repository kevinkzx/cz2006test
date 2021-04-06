import React, {createContext, useEffect, useState} from 'react';
// import {auth} from '../../firebase';

const AuthContext = createContext();
export const AuthProvider = ({children}) => {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);

	const signIn = (email, password) => {
		// return auth.createUserWithEmailAndPassword(email, password)
	};

	// useEffect(() => {
	// 	const unsubscribe = auth.onAuthStateChanged(user => {
	// 		setCurrentUser(user)
	// 		setLoading(false)
	// 	})
	// 	return unsubscribe
	// }, []);

	const value = {
	    currentUser,
	    signIn
	}

	return (
		<>
			<AuthContext.Provider value={value}>
				{children}
			</AuthContext.Provider>
		</>
	);
};

export default AuthContext;