import { Paper, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ClearSession, CheckLogin } from "../Helpers";
import { FormEvent } from "react";

function Logout() {
	const navigate = useNavigate();
	console.log(!CheckLogin());
	if (!CheckLogin()) navigate("/");

	const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		ClearSession();
		navigate("/");
	};
	return (
		<Paper>
			<h2>Are you sure you want to log out?</h2>
			<form className="userForm" id="logoutForm" onSubmit={handleSubmit}>
				<Button variant="outlined" type="submit" className="formSubmit">
					Confirm
				</Button>
				<Link to="/">No, take me back home!</Link>
			</form>
		</Paper>
	);
}

export default Logout;
