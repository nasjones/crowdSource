import { ProductCardInfo } from "../interfaces";
import {
	Card,
	CardContent,
	Button,
	CardHeader,
	Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function ProductCard({
	title,
	synopsis,
	amountSought,
	fullName,
	id,
}: ProductCardInfo) {
	const navigate = useNavigate();
	return (
		<Card>
			<CardHeader title={title} subheader={`By: ${fullName}`} />
			<CardContent>
				<Typography variant="body1" className="synopsis">
					{synopsis || "No synopsis available."}
					<br />
					{`Seeking: ${amountSought}`}
				</Typography>
			</CardContent>

			<Button variant="outlined" onClick={() => navigate(`/products/${id}`)}>
				Fund Me!
			</Button>
		</Card>
	);
}

export default ProductCard;
