import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import LoginFormView from "./views/LoginFormView";
import NotFound from "./NotFound";

function AppRoutes() {
	return (
		<div id="spacer">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<LoginFormView />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default AppRoutes;
