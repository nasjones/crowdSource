import Api from "../Api";

class ProductDisplayModel {
	static async getProduct(id: string) {
		if (id === undefined) return {};
		let response = await Api.Fetch(`/products/${id}`);
		response = {
			...response,
			amountSought: response.amount_sought,
			id: response.product_id,
			fullName: response.full_name,
		};
		delete response.amount_sought;
		delete response.full_name;
		delete response.product_id;
		return response;
	}
}

export default ProductDisplayModel;
