import React from "react";
import Nav from "./Nav";
import "./App.css";
import AppRoutes from "./AppRoutes";

function App() {
	return (
		<div className="App">
			<Nav />
			<AppRoutes />
		</div>
	);
}

export default App;
