import ProductDisplayController from "../controllers/ProductDisplayController";
import {
	Card,
	CardContent,
	Button,
	CardHeader,
	Typography,
} from "@mui/material";

function ProductDisplay() {
	return (
		<Card elevation={3}>
			<ProductDisplayController />
		</Card>
	);
}

export default ProductDisplay;
