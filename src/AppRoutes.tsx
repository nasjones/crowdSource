import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import LoginForm from "./views/LoginForm";
import Logout from "./views/Logout";
import SignUpForm from "./views/SignUpForm";
import ProductList from "./views/ProductList";
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
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default AppRoutes;
