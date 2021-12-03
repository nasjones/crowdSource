import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import LoginForm from "./views/LoginForm";
import SignUpForm from "./views/SignUpForm";
import NotFound from "./NotFound";

function AppRoutes() {
	return (
		<div id="spacer">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<LoginForm />} />
				<Route path="/signup" element={<SignUpForm />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default AppRoutes;
