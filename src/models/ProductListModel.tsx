import Api from "../Api";

class ProductListModel {
	static async getProducts() {
		const response = await Api.Fetch("/products");
		console.log(response);
		return response;
	}
}

export default ProductListModel;
