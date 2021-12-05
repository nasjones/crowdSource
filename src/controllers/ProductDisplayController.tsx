import { useEffect, useState } from "react";
import { CardHeader, CardContent, Typography } from "@mui/material";
import ProductDisplayModel from "../models/ProductDisplayModel";
import { ProductFullInfo } from "../interfaces";

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

	useEffect(() => {
		const getProduct = async () => {
			const product = await ProductDisplayModel.getProduct(id);
			setProduct(product);
			setLoading(false);
		};
		getProduct();
	}, [id]);
	if (loading) return <h3>Loading &hellip;</h3>;

	return (
		<div>
			<CardHeader title={Product.title} subheader={`by: ${Product.fullName}`} />
			<CardContent>
				<Typography variant="body1" className="synopsis">
					{Product.synopsis || "no synopsis"}
				</Typography>
				<Typography variant="body1">{Product.description}</Typography>
				<Typography variant="body2">{`Seeking: ${Product.amountSought}`}</Typography>
			</CardContent>
		</div>
	);
}

export default ProductDisplayController;
