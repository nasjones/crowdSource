import { ProductData, ProductFormProps } from "../interfaces";
import React, { ChangeEvent, FormEvent, useState } from "react";
import ProductFormModel from "../models/ProductFormModel";
import {
	FormControl,
	InputLabel,
	OutlinedInput,
	FormHelperText,
	InputAdornment,
} from "@mui/material";
import SubmitButton from "../views/SubmitButton";

/**
 * ProductFormController handles the functions required to operate
 * the Product form to create and post new products and handles
 * the functions via the ProductformModel
 * @param
 * @returns ProductFormController
 */
function ProductFormController({
	FormValues,
	FormValuesUpdate,
	AlertUpdate,
}: ProductFormProps) {
	const [submitState, toggleSubmit] = useState<boolean>(false);

	const handleChange = (evt: ChangeEvent<HTMLFormElement>) => {
		const { name, value } = evt.target;
		FormValuesUpdate((oldState: ProductData) => {
			return { ...oldState, [name]: value };
		});
	};

	const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		toggleSubmit(true);
		const response: any = await ProductFormModel.submit({
			...FormValues,
			username: window.sessionStorage.getItem("username")!,
		});
		if (response.error) {
			AlertUpdate({ alert: true, message: response.message, type: "error" });
		} else {
			AlertUpdate({
				message: response.data.message,
				alert: true,
				type: "success",
			});
		}
		toggleSubmit(false);
	};
	return (
		<form
			className="userForm"
			id="productForm"
			onChange={handleChange}
			onSubmit={handleSubmit}
		>
			<h1>Product Form</h1>

			<FormControl variant="outlined" className="formInput">
				<InputLabel htmlFor="title">Title</InputLabel>
				<OutlinedInput
					id="title"
					type="text"
					label="Title"
					name="title"
					required
				/>
			</FormControl>
			<FormControl variant="outlined" className="formInput">
				<InputLabel htmlFor="synopsis">Synopsis</InputLabel>
				<OutlinedInput
					id="synopsis"
					type="text"
					label="synopsis"
					name="synopsis"
					inputProps={{ maxLength: "100" }}
				/>
				<FormHelperText>Quick summary: not required.</FormHelperText>
			</FormControl>
			<FormControl variant="outlined" className="formInput">
				<InputLabel htmlFor="description">Description</InputLabel>
				<OutlinedInput
					id="description"
					type="text"
					label="Description"
					name="description"
					multiline
					rows={4}
					required
				/>
			</FormControl>
			<FormControl variant="outlined" className="formInput">
				<InputLabel htmlFor="Amount Sought">Amount Sought</InputLabel>
				<OutlinedInput
					id="Amount Sought"
					type="number"
					label="Amount Sought"
					name="amountSought"
					inputMode="decimal"
					inputProps={{ step: ".01", min: "1", max: "9999999.99" }}
					startAdornment={<InputAdornment position="start">$</InputAdornment>}
					required
				/>
			</FormControl>

			<SubmitButton submitting={submitState} text={"submit"} />
		</form>
	);
}

export default ProductFormController;
