import { useEffect, useState, useContext } from "react";
import { Card, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProductFormController from "../controllers/ProductFormController";
import { ProductData, ErrorStatus } from "../interfaces";
import AuthContext from "../AuthContext";

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
			<ProductFormController
				FormValues={FormValues}
				FormValuesUpdate={FormValuesUpdate}
				FormError={FormError}
				FormErrorUpdate={FormErrorUpdate}
				AlertUpdate={AlertUpdate}
			/>
			{AlertDisplay.alert && (
				<Alert severity="success">{AlertDisplay.message}</Alert>
			)}
		</Card>
	);
}

export default ProductForm;
