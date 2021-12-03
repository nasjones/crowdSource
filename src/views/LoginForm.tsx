import { useState } from "react";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
import LoginFormController from "../controllers/LoginFormController";
import { LoginData, ErrorStatus } from "../interfaces";

function LoginForm() {
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
		<Paper elevation={3}>
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
		</Paper>
	);
}

export default LoginForm;
