import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import LoginForm from "./views/LoginForm";
import Logout from "./views/Logout";
import SignUpForm from "./views/SignUpForm";
import ProductList from "./views/ProductList";
import ProductDisplay from "./views/ProductDisplay";
import ProductForm from "./views/ProductForm";
import Redirecting from "./views/Redirecting";
import StripeCheckout from "./views/StripeCheckout";
import NotFound from "./NotFound";

function AppRoutes() {
	return (
		<div id="spacer">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<LoginForm />} />
				<Route path="/logout" element={<Logout />} />
				<Route path="/signup" element={<SignUpForm />} />
				<Route path="/products" element={<ProductList />} />
				<Route path="/products/:id" element={<ProductDisplay />} />
				<Route path="/createproduct" element={<ProductForm />} />
				<Route path="/paymentauth" element={<Redirecting />} />
				<Route path="/processpayment" element={<StripeCheckout />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default AppRoutes;
