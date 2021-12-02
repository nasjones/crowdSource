import { AppBar } from "@mui/material";
import { Link } from "react-router-dom";
import "./Nav.css";
function Nav() {
	// console.log(Navbar);
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
