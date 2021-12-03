import { AppBar } from "@mui/material";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<AppBar id="navBar">
			<div>
				<Link to="/">Home</Link>
			</div>
			<div>
				<Link to="/login">login</Link>
			</div>
		</AppBar>
	);
}

export default Nav;
