import Api from "../Api";

class RedirectModel {
	static async paymentAuth() {
		const response = await Api.Fetch("/auth/reauthpayment");
		return response;
	}
}

export default RedirectModel;
