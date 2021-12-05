import { InitiatePaymentAuth } from "../Helpers";
import RedirectModel from "../models/RedirectModel";
import React from "react";

/**
 * Redirecting route to handle if user needs to reauth their payment
 * @returns
 */
function Redirecting() {
	const Redirect = async () => {
		const response = await RedirectModel.paymentAuth();
		InitiatePaymentAuth(response.data.activeLink.url);
	};
	Redirect();
	return <h1>Redirecting outside of website</h1>;
}
export default Redirecting;
