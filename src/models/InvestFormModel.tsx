import Api from "../Api";
import { InvestData } from "../interfaces";

class InvestFormModel {
	static async submit(data: InvestData) {
		const response = await Api.Post("/investments", {
			username: data.username,
			productId: data.productId,
			amount: data.amount,
		});

		return response;
	}
}

export default InvestFormModel;
