import React, { useEffect, useState } from "react";
import { CardHeader, CardContent, Typography } from "@mui/material";
import ProductDisplayModel from "../models/ProductDisplayModel";
import { ProductFullInfo } from "../interfaces";
import { useNavigate } from "react-router";

/**
 * ProductDisplayController handles the functions required to fully
 * utilize the product display and handles the functions via the
 * ProductDisplayModel
 * @param
 * @returns ProductDisplayController
 */
function ProductDisplayController({ id }: { id: string }) {
	const [Product, setProduct] = useState<ProductFullInfo>({
		id: Number(id),
		title: "",
		synopsis: "",
		amountSought: "",
		fullName: "",
		description: "",
	});
	const [loading, setLoading] = useState<boolean>(true);
	const navigate = useNavigate();
	useEffect(() => {
		const getProduct = async () => {
			const product = await ProductDisplayModel.getProduct(id);
			if (product.error) navigate("/notfound");
			setProduct(product);
			setLoading(false);
		};
		getProduct();
	}, [id, navigate]);
	if (loading) return <h3>Loading &hellip;</h3>;

	return (
		<div>
			<CardHeader title={Product.title} subheader={`by: ${Product.fullName}`} />
			<CardContent>
				<Typography variant="body1" className="synopsis">
					{Product.synopsis || "no synopsis"}
				</Typography>
				<Typography variant="body1">{Product.description}</Typography>
				<Typography variant="body2">{`Seeking: ${Number(
					Product.amountSought
				).toLocaleString()}`}</Typography>
			</CardContent>
		</div>
	);
}

export default ProductDisplayController;
