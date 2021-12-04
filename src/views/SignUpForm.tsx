import { useState } from "react";
import { Card } from "@mui/material";
import { Link } from "react-router-dom";
import SignUpFormController from "../controllers/SignUpFormController";
import { SignUpData, ErrorStatus } from "../interfaces";

function SignUpForm() {
	const [FormValues, FormValuesUpdate] = useState<SignUpData>({
		username: "",
		password: "",
		firstName: "",
		lastName: "",
		email: "",
	});

	const [PwVisibility, VisibilityUpdate] = useState(false);

	const [FormError, FormErrorUpdate] = useState<ErrorStatus>({
		error: false,
		message: "",
	});

	return (
		<Card elevation={3}>
			<SignUpFormController
				FormValues={FormValues}
				FormValuesUpdate={FormValuesUpdate}
				FormError={FormError}
				FormErrorUpdate={FormErrorUpdate}
				PwVisibility={PwVisibility}
				VisibilityUpdate={VisibilityUpdate}
			/>
			<span>
				Already have an account? <Link to="/login">Login here.</Link>
			</span>
		</Card>
	);
}

export default SignUpForm;
