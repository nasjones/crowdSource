import React from "react";
import { Paper } from "@mui/material";

function Home() {
	return (
		<Paper elevation={3}>
			<img
				src="/Crowd-Source-logo.jpeg"
				alt="Crowd source logo"
				id="homeLogo"
			/>
			<h1>Welcome to Crowd Source</h1>
		</Paper>
	);
}

export default Home;
