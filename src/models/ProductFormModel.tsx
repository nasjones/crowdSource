import Api from "../Api";
import { ProductData } from "../interfaces";

class ProductFormModel {
	static async submit(data: ProductData) {
		const response = await Api.Post("/products", {
			...data,
		});

		return response;
	}
}

export default ProductFormModel;
