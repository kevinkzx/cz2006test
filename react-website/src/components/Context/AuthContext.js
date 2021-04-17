import React, {createContext, useState} from 'react';
import fire from "../../firebase/fire";
import firebase from "firebase";


const AuthContext = createContext();
/**
 * Context for authentication
 * @param {object} children 
 * @returns {object} children as well as methods in context.
 */
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

		/**
		 * Function to handle log in of user.
		 */
		const handleLogin = () => {
			clearErrors();
			fire
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(
				function () {
					setEmail(email);
					setPassword(password);
				}
			)
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

		/**
		 * Function to allow user to sign up
		 * Checks whether the email is already used
		 * Checks whether the strength of password is sufficient
		 */
		const handleSignup = () => {
			clearErrors();
			fire
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(function (user) {
				fire.firestore()
				    .collection('Users')
				    .doc(email)
				    .set({email, password, orderHistory: [], queryHistory: []})
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

			})
		};

		/**
		 * Function when user sings out
		 */
		const handleLogout = () => {
			fire.auth()
			    .signOut()
			    .then(r => {
			    });
			clearInputs();
		};

		const booking = (data) => {
			fire.firestore()
			    .collection("Users")
			    .doc(user.email)
			    .update(
				    {
					    orderHistory: firebase.firestore.FieldValue.arrayUnion(
						    {
							    ...data,
							    created: firebase.firestore.Timestamp.now()
						    }
					    )
				    }
			    )
			    .then(r => {
				    console.log("Success booking")
			    })
		}

		const query = (data) => {
			fire.firestore()
			    .collection("Users")
			    .doc(user.email)
			    .update(
				    {
					    queryHistory: firebase.firestore.FieldValue.arrayUnion(
						    {
							    ...data,
							    created: firebase.firestore.Timestamp.now()
						    }
					    )
				    }
			    )
			    .then(r => {
				    console.log("Success booking")
			    })
		}

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
					passwordError,
					booking,
					query
				}}>
					{children}
				</AuthContext.Provider>
			</>
		);
	}
;

export default AuthContext;