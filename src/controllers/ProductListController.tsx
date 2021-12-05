import React, { useEffect, useState } from "react";
import ProductListModel from "../models/ProductListModel";
import { ProductCardInfo } from "../interfaces";
import ProductCard from "../views/ProductCard";

/**
 * ProductListController handles the functions required to operate
 * and display the product list and handles the functions via the
 * ProductListModel
 * @param
 * @returns ProductListController
 */
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
