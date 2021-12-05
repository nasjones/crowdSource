import { InitiatePaymentAuth } from "../Helpers";
import RedirectModel from "../models/RedirectModel";
import React from "react";

function Redirecting() {
	const Redirect = async () => {
		const response = await RedirectModel.paymentAuth();
		InitiatePaymentAuth(response.data.activeLink.url);
	};
	Redirect();
	return <h1>Redirecting outside of website</h1>;
}
export default Redirecting;
