import React, { useEffect, useState, useContext } from "react";
import { Card, Alert } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import LoginFormController from "../controllers/LoginFormController";
import { LoginData, AlertStatus } from "../interfaces";
import AuthContext from "../AuthContext";
/**
 * Front facing user login for display of how errors have occured
 * and what might be wrong
 * @returns
 */
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

	const [AlertDisplay, AlertUpdate] = useState<AlertStatus>({
		message: "",
		alert: false,
		type: undefined,
	});

	return (
		<Card elevation={3}>
			<LoginFormController
				FormValues={FormValues}
				FormValuesUpdate={FormValuesUpdate}
				PwVisibility={PwVisibility}
				VisibilityUpdate={VisibilityUpdate}
				AlertUpdate={AlertUpdate}
			/>
			{AlertDisplay.alert && (
				<Alert severity={AlertDisplay.type}>{AlertDisplay.message}</Alert>
			)}
			<span>
				Don't have an account? <Link to="/signup">Sign up here.</Link>
			</span>
		</Card>
	);
}

export default LoginForm;
