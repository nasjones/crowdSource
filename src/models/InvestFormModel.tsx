import Api from "../Api";
import { InvestData } from "../interfaces";

/**
 * Functional components for the InvestForm
 * this handles the post to the api endpoint
 * for investments
 */
class InvestFormModel {
	static async submit(data: InvestData) {
		const response = await Api.Post("/investments", {
			...data,
		});

		return response;
	}
}

export default InvestFormModel;
