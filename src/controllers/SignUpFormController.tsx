import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
	FormHelperText,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import SignUpFormModel from "../models/SignUpFormModel";
import { SignUpData, SignUpProps } from "../interfaces";
import { CheckLogin, InitiatePaymentAuth } from "../Helpers";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../views/SubmitButton";

function SignUpFormController({
	FormValues,
	FormValuesUpdate,
	PwVisibility,
	VisibilityUpdate,
	AlertUpdate,
}: SignUpProps) {
	const navigate = useNavigate();
	useEffect(() => {
		if (CheckLogin()) navigate("/");
	}, [navigate]);

	const [submitState, toggleSubmit] = useState<boolean>(false);

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
		toggleSubmit(true);
		evt.preventDefault();
		const response: any = await SignUpFormModel.submit(FormValues);
		if (response.error) {
			AlertUpdate({ alert: true, message: response.message, type: "error" });
			toggleSubmit(false);
		} else {
			const paymentResponse = await SignUpFormModel.paymentAuth();
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
			{/* <div className="formError">
				{FormError.error && (
					<FormHelperText error={true} className="formError">
						{FormError.message}
					</FormHelperText>
				)}
			</div> */}
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

			<SubmitButton submitting={submitState} text={"submit"} />
		</form>
	);
}

export default SignUpFormController;
