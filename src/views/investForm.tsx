import React, { useState, useContext } from "react";
import { Card, Alert } from "@mui/material";
import InvestFormController from "../controllers/InvestFormController";
import AuthContext from "../AuthContext";
import { Link } from "react-router-dom";
import { AlertStatus } from "../interfaces";

/**
 * Invest Form is the front facing user access to the full investForm
 * process but the logic is handled by trickling down
 * @returns
 */
function InvestForm() {
	const AuthStatus = useContext(AuthContext);

	const [Amount, AmountUpdate] = useState<number>(0.0);
	const [AlertDisplay, AlertUpdate] = useState<AlertStatus>({
		message: "",
		alert: false,
		type: undefined,
	});

	return (
		<Card elevation={3}>
			{AuthStatus.auth ? (
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
				<Alert severity={AlertDisplay.type}>{AlertDisplay.message}</Alert>
			)}
		</Card>
	);
}

export default InvestForm;
