import Api from "../Api";
import { LoginData } from "../interfaces";
import { AttachUserToSession } from "../Helpers";

/**
 * Handles the logic for the login form to post to the endpoint and handle
 * potential errors or rejections
 */
class LoginFormModel {
	static async submit(data: LoginData) {
		const response = await Api.Post("/auth/login", {
			...data,
		});

		if (!response.error)
			AttachUserToSession(response.data.token, data.username);
		return response;
	}
}

export default LoginFormModel;
