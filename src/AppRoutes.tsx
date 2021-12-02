import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";

function AppRoutes() {
	return (
		<div id="spacer">
			<Routes>
				<Route path="/" element={<Home />}></Route>
			</Routes>
		</div>
	);
}

export default AppRoutes;
