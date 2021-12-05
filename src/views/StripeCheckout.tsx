import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router";
import { Card } from "@mui/material";

const stripePromise = loadStripe(
	process.env.STRIPE_KEY ||
		"pk_test_51JzQjnAy5vV2xzISgvXuuHnHlbrj8NlV6HGwAkN5woPxqyVMeUFKdwVvESulSUeEwdBRn1bitvpnTroyiohlZjWR00BOx8aQ6c"
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
