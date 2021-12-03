import Api from "../Api";
import { SignUpData } from "../interfaces";

class SignUpFormModel {
	static async submit(data: SignUpData) {
		const response = await Api.Post("/auth/register", {
			username: data.username,
			password: data.password,
			firstName: data.firstName,
			lastName: data.lastName,
			email: data.email,
		});
		return response;
	}
}

export default SignUpFormModel;
