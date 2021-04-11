import React, {createContext, useEffect, useState} from 'react';
import fire from "../../firebase/fire";


const AuthContext = createContext();
export const AuthProvider = ({children}) => {
		const [user, setUser] = useState(null);
		const [email, setEmail] = useState('');
		const [password, setPassword] = useState('');
		const [emailError, setEmailError] = useState('');
		const [passwordError, setPasswordError] = useState('');
		const [hasAccount, setHasAccount] = useState(false);

		const clearInputs = () => {
			setEmail('');
			setPassword('');
		}

		const clearErrors = () => {
			setEmailError('');
			setPasswordError('');
		}

		const handleLogin = () => {
			clearErrors();
			fire
			.auth()
			.signInWithEmailAndPassword(email, password)
			.catch(err => {
				switch (err.code) {
					case "auth/invalid-email":
					case "auth/user-disabled":
					case "auth/user-not-found":
						setEmailError(err.message);
						break;
					case "auth/wrong-password":
						setPasswordError(err.message);
						break;
				}
			})
		};

		const handleSignup = () => {
			clearErrors();
			fire
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(function (user) {
				fire.firestore()
				    .collection('Users')
				    .doc(email)
				    .set({email, password, orderHistory: []})
				    .then();
			})
			.catch(err => {
				switch (err.code) {
					case "auth/email-already-in-use":
					case "auth/invalid-email":
						setEmailError(err.message);
						break;
					case "auth/weak-password":
						setPasswordError(err.message);
						break;
				}
				;
			})
		};

		const handleLogout = () => {
			fire.auth()
			    .signOut()
			    .then(r => {
			    });
			clearInputs();
		};

// const authListener = () => {
// 	fire.auth()
// 	    .onAuthStateChanged(user => {
// 		    if (user) {
// 			    clearInputs();
// 			    setUser(user);
// 		    } else {
// 			    setUser("");
// 		    }
// 	    })
// };

// useEffect(() => {
// 	authListener();
// }, []);

		return (
			<>
				<AuthContext.Provider value={{
					user,
					email,
					password,
					setUser,
					setEmail,
					setPassword,
					clearInputs,
					clearErrors,
					handleLogin,
					handleSignup,
					handleLogout,
					hasAccount,
					setHasAccount,
					emailError,
					passwordError
				}}>
					{children}
				</AuthContext.Provider>
			</>
		);
	}
;

export default AuthContext;