import { AppBar } from "@mui/material";
import { NavLink } from "react-router-dom";
import AuthContext from "./AuthContext";
import React, { useContext } from "react";

/**
 * Nav for the app displayed on every route
 * @returns
 */
function Nav() {
	const { auth } = useContext(AuthContext);

	return (
		<AppBar id="navBar">
			<div id="navLeft">
				{auth && <span>{window.sessionStorage.getItem("username")}</span>}
				<NavLink to="/">Home</NavLink>
				<NavLink to="/products">Products</NavLink>
			</div>

			{auth ? (
				<div id="navRight">
					<NavLink to="/createproduct">Create Product</NavLink>
					<NavLink to="/logout">logout</NavLink>
				</div>
			) : (
				<div id="navRight">
					<NavLink to="/login">login</NavLink> /
					<NavLink to="/signup">signup</NavLink>
				</div>
			)}
		</AppBar>
	);
}

export default Nav;
