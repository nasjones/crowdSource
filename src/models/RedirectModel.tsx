import Api from "../Api";

/**
 * Handles logic for the redirect for users to reauthorize payment endpoints
 */
class RedirectModel {
	static async paymentAuth() {
		const response = await Api.Fetch("/auth/reauthpayment");
		return response;
	}
}

export default RedirectModel;
