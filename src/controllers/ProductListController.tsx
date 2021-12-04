import { useEffect, useState } from "react";
import ProductListModel from "../models/ProductListModel";
import { ProductCardInfo } from "../interfaces";
import ProductCard from "../views/ProductCard";

function ProductListController() {
	const [Products, UpdateProducts] = useState<Array<any>>([]);
	useEffect(() => {
		const getProducts = async () => {
			const products = await ProductListModel.getProducts();
			UpdateProducts(
				products.map((product: ProductCardInfo) => {
					return (
						<ProductCard
							{...product}
							key={`product-${product.title}-${product.id}`}
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
