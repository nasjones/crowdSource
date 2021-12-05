import React from "react";
import { ProductCardInfo } from "../interfaces";
import {
	Card,
	CardContent,
	Button,
	CardHeader,
	Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

/**
 * Display for the product card places the data on a card display
 * @param
 * @returns
 */
function ProductCard({
	title,
	synopsis,
	amountSought,
	fullName,
	id,
}: ProductCardInfo) {
	const navigate = useNavigate();
	return (
		<Card elevation={5}>
			<CardHeader title={title} subheader={`By: ${fullName}`} />
			<CardContent>
				<Typography variant="body1" className="synopsis">
					{synopsis || "No synopsis available."}
					<br />
					{`Seeking: ${Number(amountSought).toLocaleString()}`}
				</Typography>
			</CardContent>

			<Button variant="outlined" onClick={() => navigate(`/products/${id}`)}>
				Fund Me!
			</Button>
		</Card>
	);
}

export default ProductCard;
