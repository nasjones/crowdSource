import { useState, useContext } from "react";
import { Card, Alert } from "@mui/material";
import InvestFormController from "../controllers/InvestFormController";
import AuthContext from "../AuthContext";
import { Link } from "react-router-dom";
import { ErrorStatus } from "../interfaces";

function InvestForm() {
	const AuthStatus = useContext(AuthContext);

	const [Amount, AmountUpdate] = useState<number>(0.0);
	const [AlertDisplay, AlertUpdate] = useState<any>({
		message: "",
		alert: false,
	});
	const [FormError, FormErrorUpdate] = useState<ErrorStatus>({
		error: false,
		message: "",
	});

	return (
		<Card elevation={3}>
			{AuthStatus.auth ? (
				<InvestFormController
					Amount={Amount}
					AmountUpdate={AmountUpdate}
					AlertUpdate={AlertUpdate}
					FormError={FormError}
					FormErrorUpdate={FormErrorUpdate}
				/>
			) : (
				<h3>
					Please <Link to="/login">login</Link> to invest
				</h3>
			)}
			{AlertDisplay.alert && (
				<Alert severity="success">{AlertDisplay.message}</Alert>
			)}
		</Card>
	);
}

export default InvestForm;
