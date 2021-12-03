import React from "react";
import {
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
	Button,
	FormHelperText,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LoginFormModel from "../models/LoginFormModel";
import { LoginData, LoginError } from "../interfaces";

function LoginFormController() {
	const [FormValues, FormValuesUpdate] = React.useState<LoginData>({
		username: "",
		password: "",
		showPassword: false,
	});

	const [FormError, FormErrorUpdate] = React.useState<LoginError>({
		error: false,
		message: "",
	});

	const handleChange = (evt: any) => {
		const { name, value } = evt.target;
		FormValuesUpdate((oldState: LoginData) => {
			return { ...oldState, [name]: value };
		});
	};

	const toggleShowPassword = () => {
		FormValuesUpdate((oldState: LoginData) => {
			return { ...oldState, showPassword: !oldState.showPassword };
		});
	};

	const handleSubmit = async (evt: any) => {
		evt.preventDefault();
		console.log("submit");
		const response: any = await LoginFormModel.submit(FormValues);
		if (!response.success) {
			FormErrorUpdate({ error: true, message: response.message });
		}
	};

	return (
		<form id="loginForm" onChange={handleChange} onSubmit={handleSubmit}>
			<h1>Login Form</h1>
			{FormError.error && (
				<FormHelperText error={true} id="loginError">
					{FormError.message}
				</FormHelperText>
			)}
			<FormControl variant="outlined" className="loginInput">
				<InputLabel htmlFor="loginUsername">Username</InputLabel>
				<OutlinedInput
					id="loginUsername"
					type="text"
					label="Username"
					name="username"
					autoComplete="current-username"
					required
				/>
			</FormControl>
			<FormControl variant="outlined" className="loginInput">
				<InputLabel htmlFor="loginPassword">Password</InputLabel>
				<OutlinedInput
					id="loginPassword"
					type={FormValues.showPassword ? "text" : "password"}
					name="password"
					label="Password"
					autoComplete="current-password"
					required
					endAdornment={
						<InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								onClick={toggleShowPassword}
								edge="end"
							>
								{FormValues.showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					}
				/>
			</FormControl>

			<Button
				variant="outlined"
				id="loginSubmit"
				type="submit"
				className="loginItem"
			>
				Submit
			</Button>
		</form>
	);
}

export default LoginFormController;
