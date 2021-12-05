import React from "react";
import ProductListController from "../controllers/ProductListController";
import { Card } from "@mui/material";
function ProductList() {
	return (
		<Card elevation={3}>
			<h1>Products</h1>
			<ProductListController />
		</Card>
	);
}

export default ProductList;
