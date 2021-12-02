import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Nav />
			<Routes>
				<Route path="/"></Route>
			</Routes>
		</div>
	);
}

export default App;
