import Nav from "./Nav";
import "./App.css";
import AppRoutes from "./AppRoutes";
import { CheckLogin } from "./Helpers";
import React, { useState } from "react";
import AuthContext from "./AuthContext";
require("dotenv").config();

function App() {
	const [auth, setAuth] = useState<boolean>(CheckLogin());
	return (
		<div className="App">
			<AuthContext.Provider value={{ auth, setAuth }}>
				<Nav />
				<AppRoutes />
			</AuthContext.Provider>
		</div>
	);
}

export default App;
