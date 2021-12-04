import { useState, useContext } from "react";
import { Paper, Alert } from "@mui/material";
import InvestFormController from "../controllers/InvestFormController";
import AuthContext from "../AuthContext";
import { Link } from "react-router-dom";

function InvestForm() {
	const AuthStatus = useContext(AuthContext);

	const [Amount, AmountUpdate] = useState<number>(0.01);
	const [AlertDisplay, AlertUpdate] = useState<any>({
		message: "",
		alert: false,
	});

	return (
		<Paper elevation={3}>
			{AuthStatus ? (
				<InvestFormController
					Amount={Amount}
					AmountUpdate={AmountUpdate}
					AlertUpdate={AlertUpdate}
				/>
			) : (
				<h3>
					Please <Link to="/login">login</Link> to invest
				</h3>
			)}
			{AlertDisplay.alert && (
				<Alert severity="success">{AlertDisplay.message}</Alert>
			)}
		</Paper>
	);
}

export default InvestForm;
