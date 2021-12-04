import ProductDisplayController from "../controllers/ProductDisplayController";
import { Card } from "@mui/material";
import { useParams } from "react-router";
import InvestForm from "./investForm";

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
