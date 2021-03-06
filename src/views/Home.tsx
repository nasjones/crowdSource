import { Card, Button } from "@mui/material";
import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CheckLogin } from "../Helpers";
import AuthContext from "../AuthContext";
/**
 * Home route display handles greeting users and is the base
 * route for navigation
 * @returns
 */
function Home() {
	const { setAuth } = useContext(AuthContext);
	useEffect(() => {
		const auth = CheckLogin();
		setAuth(auth);
	}, [setAuth]);
	return (
		<Card elevation={3}>
			<img src="/Crowd-Source-logo.jpeg" alt="CrowdSource logo" id="homeLogo" />
			<h1>Welcome to CrowdSource</h1>
			<div id="homeLinks">
				{CheckLogin() ? (
					<Link to="/products">
						<Button variant="outlined">Browse Ideas</Button>
					</Link>
				) : (
					<div className="userForm">
						<span className="homeSpan">
							Existing users: <Link to="/login">Login</Link>
						</span>
						<span className="homeSpan">
							New here: <Link to="/signup">Sign Up</Link>
						</span>
					</div>
				)}
			</div>
		</Card>
	);
}

export default Home;
