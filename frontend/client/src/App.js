import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { checkAuth } from 'feature/auth';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HomePage from "containers/HomePage";
import LoginPage from "containers/LoginPage";
import DashboardPage from "containers/DashboardPage";
import RegisterPage from "containers/RegisterPage";

//import { store } from "store";


const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkAuth());
	}, []);

	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/dashboard' element={<DashboardPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />
			</Routes>
		</Router>
	);
};

export default App;