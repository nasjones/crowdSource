import React, { ChangeEvent, FormEvent, useState } from "react";
import {
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LoginFormModel from "../models/LoginFormModel";
import { LoginData, LoginProps } from "../interfaces";
import { useNavigate } from "react-router-dom";
import { CheckLogin } from "../Helpers";
import SubmitButton from "../views/SubmitButton";

function LoginFormController({
	FormValues,
	FormValuesUpdate,
	PwVisibility,
	VisibilityUpdate,
	AlertUpdate,
}: LoginProps) {
	const navigate = useNavigate();
	if (CheckLogin()) navigate("/");

	const handleChange = (evt: ChangeEvent<HTMLFormElement>) => {
		const { name, value } = evt.target;
		FormValuesUpdate((oldState: LoginData) => {
			return { ...oldState, [name]: value };
		});
	};

	const [submitState, toggleSubmit] = useState<boolean>(false);

	const toggleShowPassword = () => {
		VisibilityUpdate(!PwVisibility);
	};

	const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		toggleSubmit(true);
		const response: any = await LoginFormModel.submit(FormValues);
		if (response.error) {
			toggleSubmit(false);
			AlertUpdate({ alert: true, message: response.message, type: "error" });
		} else {
			navigate("/");
		}
	};

	return (
		<form
			id="loginForm"
			onChange={handleChange}
			onSubmit={handleSubmit}
			className="userForm"
		>
			<h1>Login</h1>

			<FormControl variant="outlined" className="formInput">
				<InputLabel htmlFor="loginUsername">Username</InputLabel>
				<OutlinedInput
					id="loginUsername"
					type="text"
					label="Username"
					name="username"
					autoComplete="current-username"
					inputProps={{ minLength: "4", maxLength: "25" }}
					required
				/>
			</FormControl>
			<FormControl variant="outlined" className="formInput">
				<InputLabel htmlFor="loginPassword">Password</InputLabel>
				<OutlinedInput
					id="loginPassword"
					type={PwVisibility ? "text" : "password"}
					name="password"
					label="Password"
					autoComplete="current-password"
					inputProps={{ minLength: "4", maxLength: "25" }}
					required
					endAdornment={
						<InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								onClick={toggleShowPassword}
								edge="end"
							>
								{PwVisibility ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					}
				/>
			</FormControl>
			<SubmitButton submitting={submitState} text={"submit"} />
		</form>
	);
}

export default LoginFormController;
