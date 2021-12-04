import { useEffect, useState } from "react";
import ProductListModel from "../models/ProductListModel";
import ProductCard from "../views/ProductCard";

function ProductListController() {
	const [Products, UpdateProducts] = useState<Array<any>>([]);
	useEffect(() => {
		const getProducts = async () => {
			const products = await ProductListModel.getProducts();
			UpdateProducts(
				products.map((product: any) => {
					console.log(product);
					product = {
						...product,
						amountSought: Number(product.amount_sought),
						id: product.product_id,
						fullName: `${product.first_name} ${product.last_name}`,
					};

					return (
						<ProductCard
							{...product}
							key={`product-${product.name}-${product.id}`}
						/>
					);
				})
			);
		};
		getProducts();
	}, []);
	return <div id="productDisplay">{Products}</div>;
}

export default ProductListController;
