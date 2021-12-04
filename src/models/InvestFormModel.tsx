import Api from "../Api";
import { InvestData } from "../interfaces";

class InvestFormModel {
	static async submit(data: InvestData) {
		const response = await Api.Post("/investments", {
			...data,
		});

		return response;
	}
}

export default InvestFormModel;
