import { Card, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ClearSession } from "../Helpers";
import AuthContext from "../AuthContext";
import React, { FormEvent, useContext, useEffect } from "react";

function Logout() {
	const navigate = useNavigate();
	const AuthStatus = useContext(AuthContext);

	useEffect(() => {
		if (!AuthStatus.auth) navigate("/");
	});

	const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		ClearSession();
		AuthStatus.setAuth(false);
		navigate("/");
	};
	return (
		<Card>
			<h2>Are you sure you want to log out?</h2>
			<form className="userForm" id="logoutForm" onSubmit={handleSubmit}>
				<Button variant="outlined" type="submit" className="formSubmit">
					Confirm
				</Button>
				<Link to="/">No, take me back home!</Link>
			</form>
		</Card>
	);
}

export default Logout;
