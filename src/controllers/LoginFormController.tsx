import { ChangeEvent, FormEvent } from "react";
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
import { LoginData, LoginProps } from "../interfaces";
import { useNavigate } from "react-router-dom";
import { CheckLogin } from "../Helpers";

function LoginFormController({
	FormValues,
	FormValuesUpdate,
	FormError,
	FormErrorUpdate,
	PwVisibility,
	VisibilityUpdate,
}: LoginProps) {
	const navigate = useNavigate();
	if (CheckLogin()) navigate("/");

	const handleChange = (evt: ChangeEvent<HTMLFormElement>) => {
		const { name, value } = evt.target;
		FormValuesUpdate((oldState: LoginData) => {
			return { ...oldState, [name]: value };
		});
	};

	const toggleShowPassword = () => {
		VisibilityUpdate(!PwVisibility);
	};

	const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		const response: any = await LoginFormModel.submit(FormValues);
		if (response.error) {
			FormErrorUpdate({ error: true, message: response.message });
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
			<div className="formError">
				{FormError.error && (
					<FormHelperText error={true}>{FormError.message}</FormHelperText>
				)}
			</div>

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

			<Button variant="outlined" type="submit" className="formSubmit">
				Submit
			</Button>
		</form>
	);
}

export default LoginFormController;
