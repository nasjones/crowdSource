import Api from "../Api";
import { LoginData } from "../interfaces";
import { AttachUserToSession } from "../Helpers";

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
