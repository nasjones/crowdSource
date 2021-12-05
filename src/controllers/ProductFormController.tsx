import { ProductData, ProductFormProps } from "../interfaces";
import { ChangeEvent, FormEvent } from "react";
import ProductFormModel from "../models/ProductFormModel";
import {
	FormControl,
	InputLabel,
	OutlinedInput,
	Button,
	FormHelperText,
	InputAdornment,
} from "@mui/material";

function ProductFormController({
	FormValues,
	FormValuesUpdate,
	FormError,
	FormErrorUpdate,
	AlertUpdate,
}: ProductFormProps) {
	const handleChange = (evt: ChangeEvent<HTMLFormElement>) => {
		const { name, value } = evt.target;
		FormValuesUpdate((oldState: ProductData) => {
			return { ...oldState, [name]: value };
		});
	};

	const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		const response: any = await ProductFormModel.submit({
			...FormValues,
			username: window.sessionStorage.getItem("username")!,
		});
		if (response.error) {
			FormErrorUpdate({ error: true, message: response.message });
		} else {
			AlertUpdate({ message: response.data.message, alert: true });
		}
	};
	return (
		<form
			className="userForm"
			id="productForm"
			onChange={handleChange}
			onSubmit={handleSubmit}
		>
			<h1>Product Form</h1>
			<div className="formError">
				{FormError.error && (
					<FormHelperText error={true} className="formError">
						{FormError.message}
					</FormHelperText>
				)}
			</div>
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
					inputProps={{ step: ".01", min: ".01", max: "9999999.99" }}
					startAdornment={<InputAdornment position="start">$</InputAdornment>}
					required
				/>
			</FormControl>

			<Button variant="outlined" type="submit" className="formSubmit">
				Submit
			</Button>
		</form>
	);
}

export default ProductFormController;
