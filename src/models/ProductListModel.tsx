import Api from "../Api";

class ProductListModel {
	static async getProducts() {
		let response = await Api.Fetch("/products");
		response = response.map((product: any) => {
			product = {
				...product,
				amountSought: product.amount_sought,
				id: product.product_id,
				fullName: product.full_name,
			};
			delete product.amount_sought;
			delete product.full_name;
			delete product.product_id;
			return product;
		});
		return response;
	}
}

export default ProductListModel;
