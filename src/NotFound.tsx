import { Card } from "@mui/material";
import { Link } from "react-router-dom";

function NotFound() {
	return (
		<Card elevation={3} id="notFound">
			<h1>Sorry we could not find what you were looking for.</h1>
			<p>
				Head back to the <Link to="/">homepage</Link> and navigate from there.
			</p>
		</Card>
	);
}

export default NotFound;
