import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
	const {actions} = useContext(Context);
	const navigate = useNavigate();
	const isUserInSession = localStorage.getItem('jwt-token')

	const handleLogout = () => {
		localStorage.removeItem('jwt-token');
		console.log("redirecting to /");
		navigate('/');
	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">JWT AUTH APP</span>
				</Link>
				<div className="d-flex">
				{!isUserInSession && (
					<>
						<Link to='/signup'>
							<button className="btn btn-primary">Sign up</button>
						</Link>&nbsp;
						<Link to='/login'>
							<button className="btn btn-primary">Log in</button>
						</Link>&nbsp;
					</>
				)}
				{isUserInSession && (
					<>
						<button className="btn btn-danger" onClick={handleLogout}>Log out</button>
					</>
					)}
				</div>
			</div>
		</nav>
	);
};
