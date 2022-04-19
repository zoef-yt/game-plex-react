import axios from 'axios';
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext({
	isLoginModal: false,
	isLoading: false,
	error: '',
	user: '',
	toggleIsLogin: false,
	signUpHandler: (email, password, name) => {},
	loginHandler: (email, password) => {},
	logoutHandler: () => {},
	errorHandler: (hasError, errorMessage) => {},
});

const AuthProvider = ({ children }) => {
	const [isLoginModal, setIsLoginModal] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState({ hasError: false, errorMessage: '' });
	const [user, setUser] = useState(null);

	const toggleIsLogin = () => {
		setIsLoginModal((prevIsLogin) => !prevIsLogin);
	};

	const errorHandler = (hasError, message) => {
		setError({ hasError: hasError, errorMessage: message });
	};

	const loginHandler = async (user) => {
		setIsLoading(true);
		try {
			const response = await axios.post('/api/auth/login', {
				email: user.email,
				password: user.password,
			});
			if (response) {
				localStorage.setItem('token', response.data.encodedToken);
				setIsLoginModal(true);
				errorHandler(false, '');
				setUser({ userInfo: response.data.foundUser, encodedToken: response.data.encodedToken });
				return true;
			}
		} catch (e) {
			console.log(e.response);
			errorHandler(true, e.response.data.errors[0]);
			return false;
		} finally {
			setIsLoading(false);
		}
	};

	const signUpHandler = async (user) => {
		setIsLoading(true);
		try {
			const response = await axios.post('/api/auth/signup', {
				email: user.email,
				password: user.password,
				name: user.name,
			});
			if (response) {
				setIsLoginModal(true);
				errorHandler(false, '');
			}
		} catch (e) {
			console.log(e.response);
			errorHandler(true, e.response.data.errors[0]);
		} finally {
			setIsLoading(false);
		}
	};

	const logoutHandler = () => {
		localStorage.removeItem('token');
		setUser(null);
		setIsLoginModal(false);
	};

	return (
		<AuthContext.Provider
			value={{ isLoginModal, isLoading, error, user, toggleIsLogin, signUpHandler, loginHandler, logoutHandler, errorHandler }}
		>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
