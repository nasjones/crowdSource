import { AppBar } from "@mui/material";
import { Link } from "react-router-dom";
import AuthContext from "./AuthContext";
import { useContext } from "react";

function Nav() {
	const { auth } = useContext(AuthContext);

	return (
		<AppBar id="navBar">
			<div id="navLeft">
				<Link to="/">Home</Link>
				<Link to="/products">Products</Link>
			</div>
			<div id="navRight">
				{auth ? (
					<Link to="/logout">logout</Link>
				) : (
					<Link to="/login">login</Link>
				)}
			</div>
		</AppBar>
	);
}

export default Nav;
