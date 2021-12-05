import React, { useState } from "react";
import { Card, Alert } from "@mui/material";
import { Link } from "react-router-dom";
import SignUpFormController from "../controllers/SignUpFormController";
import { SignUpData, AlertStatus } from "../interfaces";

function SignUpForm() {
	const [FormValues, FormValuesUpdate] = useState<SignUpData>({
		username: "",
		password: "",
		firstName: "",
		lastName: "",
		email: "",
	});

	const [PwVisibility, VisibilityUpdate] = useState(false);
	const [AlertDisplay, AlertUpdate] = useState<AlertStatus>({
		message: "",
		alert: false,
		type: undefined,
	});
	return (
		<Card elevation={3}>
			<SignUpFormController
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
				Already have an account? <Link to="/login">Login here.</Link>
			</span>
		</Card>
	);
}

export default SignUpForm;
