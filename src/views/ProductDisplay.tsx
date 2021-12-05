import React from "react";
import ProductDisplayController from "../controllers/ProductDisplayController";
import { Card } from "@mui/material";
import { useParams } from "react-router";
import InvestForm from "./investForm";
/**
 * Display for the singular product gets the products id by the params
 * @returns
 */
function ProductDisplay() {
	const { id } = useParams();
	return (
		<Card elevation={3}>
			<ProductDisplayController id={id!} />
			<InvestForm />
		</Card>
	);
}

export default ProductDisplay;
