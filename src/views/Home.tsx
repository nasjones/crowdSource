import { Paper, Button } from "@mui/material";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CheckLogin } from "../Helpers";
import AuthContext from "../AuthContext";

function Home() {
	const { setAuth } = useContext(AuthContext);
	useEffect(() => {
		const auth = CheckLogin();
		setAuth(auth);
	}, [setAuth]);
	return (
		<Paper elevation={3}>
			<img
				src="/Crowd-Source-logo.jpeg"
				alt="Crowd source logo"
				id="homeLogo"
			/>
			<h1>Welcome to Crowd Source</h1>
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
		</Paper>
	);
}

export default Home;
