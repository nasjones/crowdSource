import React, { ChangeEvent, FormEvent, useEffect } from "react";
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
import SignUpFormModel from "../models/SignUpFormModel";
import { SignUpData, SignUpProps } from "../interfaces";
import { CheckLogin, InitiatePaymentAuth } from "../Helpers";
import { useNavigate } from "react-router-dom";

function SignUpFormController({
	FormValues,
	FormValuesUpdate,
	FormError,
	FormErrorUpdate,
	PwVisibility,
	VisibilityUpdate,
}: SignUpProps) {
	const navigate = useNavigate();
	useEffect(() => {
		if (CheckLogin()) navigate("/");
	}, [navigate]);

	const handleChange = (evt: ChangeEvent<HTMLFormElement>) => {
		const { name, value } = evt.target;
		FormValuesUpdate((oldState: SignUpData) => {
			return { ...oldState, [name]: value };
		});
	};

	const togglePWVisibility = () => {
		VisibilityUpdate(!PwVisibility);
	};

	const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		const response: any = await SignUpFormModel.submit(FormValues);
		if (response.error) {
			FormErrorUpdate({ error: true, message: response.message });
		} else {
			const paymentResponse = await SignUpFormModel.paymentAuth();
			console.log(paymentResponse);
			InitiatePaymentAuth(paymentResponse.accountLink.url);
		}
	};

	return (
		<form
			className="userForm"
			id="signupForm"
			onChange={handleChange}
			onSubmit={handleSubmit}
		>
			<h1>Sign Up</h1>
			<div className="formError">
				{FormError.error && (
					<FormHelperText error={true} className="formError">
						{FormError.message}
					</FormHelperText>
				)}
			</div>
			<FormControl variant="outlined" className="formInput">
				<InputLabel htmlFor="firstName">First Name</InputLabel>
				<OutlinedInput
					id="firstName"
					type="text"
					label="First Name"
					name="firstName"
					autoComplete="First Name"
					required
				/>
			</FormControl>
			<FormControl variant="outlined" className="formInput">
				<InputLabel htmlFor="lastName">Last Name</InputLabel>
				<OutlinedInput
					id="lastName"
					type="text"
					label="Last Name"
					name="lastName"
					autoComplete="Last Name"
					required
				/>
			</FormControl>
			<FormControl variant="outlined" className="formInput">
				<InputLabel htmlFor="email">Email Address</InputLabel>
				<OutlinedInput
					id="email"
					type="email"
					label="Email Address"
					name="email"
					autoComplete="Email address"
					required
				/>
			</FormControl>
			<FormControl variant="outlined" className="formInput">
				<InputLabel htmlFor="signUpUsername">Username</InputLabel>
				<OutlinedInput
					id="signUpUsername"
					type="text"
					label="Username"
					name="username"
					autoComplete="current-username"
					inputProps={{ minLength: "4", maxLength: "25" }}
					required
				/>
				<FormHelperText>minLength:4 / maxLength:25</FormHelperText>
			</FormControl>
			<FormControl variant="outlined" className="formInput">
				<InputLabel htmlFor="signUpPassword">Password</InputLabel>
				<OutlinedInput
					id="signUpPassword"
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
								onClick={togglePWVisibility}
								edge="end"
							>
								{PwVisibility ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					}
				/>
				<FormHelperText>minLength:4 / maxLength:25</FormHelperText>
			</FormControl>

			<Button variant="outlined" type="submit" className="formSubmit">
				Submit
			</Button>
		</form>
	);
}

export default SignUpFormController;
