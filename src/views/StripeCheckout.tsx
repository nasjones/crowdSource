import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router";
import { Card } from "@mui/material";

const stripePromise = loadStripe(
	"pk_live_51JzQjnAy5vV2xzISx1lVztecJGVWH6ATszdodFNO7DdahFh52WNOTH7TC45BI3QkZeusUASgAUYhcdQCzbvfHzrK00JrhsoxIm"
);

function StripeCheckout(props: any) {
	const { state } = useLocation();
	const options = {
		clientSecret: state.secret,
	};

	return (
		<Card elevation={5} id="paymentForm">
			<Elements stripe={stripePromise} options={options}>
				<CheckoutForm returnUrl={state.returnUrl} />
			</Elements>
		</Card>
	);
}
export default StripeCheckout;
