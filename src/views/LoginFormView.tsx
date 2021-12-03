import { Paper } from "@mui/material";
import LoginFormController from "../controllers/LoginFormController";

function LoginFormView() {
	return (
		<Paper elevation={3}>
			<LoginFormController />
		</Paper>
	);
}

export default LoginFormView;
