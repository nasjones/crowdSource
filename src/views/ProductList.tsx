import React from "react";
import ProductListController from "../controllers/ProductListController";
import { Card } from "@mui/material";

/**
 * Display for product list accessed by user to display all products
 * @returns
 */
function ProductList() {
	return (
		<Card elevation={3}>
			<h1>Products</h1>
			<ProductListController />
		</Card>
	);
}

export default ProductList;
