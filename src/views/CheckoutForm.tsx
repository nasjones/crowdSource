import React, { useState } from "react";
import {
	useStripe,
	useElements,
	PaymentElement,
} from "@stripe/react-stripe-js";
/**
 * Checkout form for use with the stripe api this handles the logic
 * to parse payments
 * @param param0
 * @returns CheckoutForm
 */
const CheckoutForm = ({ returnUrl }: { returnUrl: string }) => {
	const stripe = useStripe();
	const elements = useElements();

	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async (event: any) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}
		const { error } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				return_url: returnUrl,
			},
		});

		if (error) {
			setErrorMessage(error.message!);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="userForm">
			<PaymentElement />
			<button disabled={!stripe}>Submit</button>
			{errorMessage && <div>{errorMessage}</div>}
		</form>
	);
};

export default CheckoutForm;
