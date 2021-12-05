import Api from "../Api";
import { SignUpData } from "../interfaces";
import { AttachUserToSession } from "../Helpers";

/**
 * handles the signup forms initial posting as well as the authorization
 *  endpoint for the user
 */
class SignUpFormModel {
	static async submit(data: SignUpData) {
		const response = await Api.Post("/auth/register", {
			...data,
		});
		if (!response.error)
			AttachUserToSession(response.data.token, data.username);
		return response;
	}

	static async paymentAuth() {
		const response = await Api.Fetch("/auth/payment");
		return response;
	}
}

export default SignUpFormModel;
