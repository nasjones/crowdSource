import Api from "../Api";
import { SignUpData } from "../interfaces";
import { AttachUserToSession } from "../Helpers";

class SignUpFormModel {
	static async submit(data: SignUpData) {
		const response = await Api.Post("/auth/register", {
			...data,
		});
		AttachUserToSession(response.data.token, data.username);
		return response;
	}
}

export default SignUpFormModel;
