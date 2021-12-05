import React from "react";
import { CircularProgress, Button } from "@mui/material";
import { SubmitButtonInterface } from "../interfaces";

/**
 * Reusable submit button for use across form to handle once submission is
 * sent
 * @param param0
 * @returns
 */
function SubmitButton({ submitting, text }: SubmitButtonInterface) {
	return submitting ? (
		<CircularProgress className="formSubmit" />
	) : (
		<Button variant="outlined" type="submit" className="formSubmit">
			{text}
		</Button>
	);
}

export default SubmitButton;
