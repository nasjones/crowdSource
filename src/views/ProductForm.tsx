import React, { useEffect, useState, useContext } from "react";
import { Card, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProductFormController from "../controllers/ProductFormController";
import { ProductData, AlertStatus } from "../interfaces";
import AuthContext from "../AuthContext";

/**
 * Product Form display
 * @returns
 */
function ProductForm() {
	const navigate = useNavigate();
	const AuthStatus = useContext(AuthContext);

	useEffect(() => {
		if (!AuthStatus.auth) navigate("/");
	});

	const [FormValues, FormValuesUpdate] = useState<ProductData>({
		title: "",
		synopsis: "",
		amountSought: "",
		description: "",
		username: "",
	});

	const [AlertDisplay, AlertUpdate] = useState<AlertStatus>({
		message: "",
		alert: false,
		type: undefined,
	});

	return (
		<Card elevation={3}>
			<ProductFormController
				FormValues={FormValues}
				FormValuesUpdate={FormValuesUpdate}
				AlertUpdate={AlertUpdate}
			/>
			{AlertDisplay.alert && (
				<Alert severity={AlertDisplay.type}>{AlertDisplay.message}</Alert>
			)}
		</Card>
	);
}

export default ProductForm;
