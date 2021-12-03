import Api from "../Api";
import { LoginData } from "../interfaces";
import { AttachUserToSession } from "../Helpers";

class LoginFormModel {
	static async submit(data: LoginData) {
		const response = await Api.Post("/auth/login", {
			username: data.username,
			password: data.password,
		});
		console.log(response);
		AttachUserToSession(response.data.token, data.username);
		return response;
	}
}

export default LoginFormModel;
