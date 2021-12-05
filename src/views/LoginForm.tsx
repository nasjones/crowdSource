import React, { useEffect, useState, useContext } from "react";
import { Card } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import LoginFormController from "../controllers/LoginFormController";
import { LoginData, ErrorStatus } from "../interfaces";
import AuthContext from "../AuthContext";

function LoginForm() {
	const navigate = useNavigate();
	const AuthStatus = useContext(AuthContext);

	useEffect(() => {
		if (AuthStatus.auth) navigate("/");
	});

	const [FormValues, FormValuesUpdate] = useState<LoginData>({
		username: "",
		password: "",
	});
	const [PwVisibility, VisibilityUpdate] = useState(false);

	const [FormError, FormErrorUpdate] = useState<ErrorStatus>({
		error: false,
		message: "",
	});

	return (
		<Card elevation={3}>
			<LoginFormController
				FormValues={FormValues}
				FormValuesUpdate={FormValuesUpdate}
				FormError={FormError}
				FormErrorUpdate={FormErrorUpdate}
				PwVisibility={PwVisibility}
				VisibilityUpdate={VisibilityUpdate}
			/>
			<span>
				Don't have an account? <Link to="/signup">Sign up here.</Link>
			</span>
		</Card>
	);
}

export default LoginForm;
