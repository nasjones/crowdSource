import Api from "../Api";
import { LoginData } from "../interfaces";

class LoginFormModel {
	static async submit(data: LoginData) {
		const response = await Api.Post("/auth/login", {
			username: data.username,
			password: data.password,
		});
		return response;
	}
}

export default LoginFormModel;
