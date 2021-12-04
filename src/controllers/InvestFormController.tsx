import { InvestControllerProps } from "../interfaces";
import { ChangeEvent, FormEvent } from "react";
import { useParams } from "react-router";
import {
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	Button,
	FormHelperText,
} from "@mui/material";
import InvestFormModel from "../models/InvestFormModel";

function InvestFormController({
	Amount,
	AmountUpdate,
	AlertUpdate,
	FormError,
	FormErrorUpdate,
}: InvestControllerProps) {
	const { id } = useParams();
	const username = window.sessionStorage.getItem("username");
	const handleChange = (evt: ChangeEvent<HTMLFormElement>) => {
		const { value } = evt.target;
		AmountUpdate(value);
	};
	const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();

		const response: any = await InvestFormModel.submit({
			username: username!,
			productId: id!,
			amount: Amount,
		});
		if (response.error) {
			FormErrorUpdate({ error: true, message: response.message });
		} else {
			AlertUpdate({ message: response.data.message, alert: true });
		}
	};
	return (
		<form
			onChange={handleChange}
			onSubmit={handleSubmit}
			className="userForm"
			id="investForm"
		>
			<h3>invest</h3>
			<div className="formError">
				{FormError.error && (
					<FormHelperText error={true} className="formError">
						{FormError.message}
					</FormHelperText>
				)}
			</div>
			<FormControl variant="outlined" className="formInput">
				<InputLabel htmlFor="investAmount">Amount</InputLabel>
				<OutlinedInput
					id="investAmount"
					type="number"
					label="Amount"
					name="amount"
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

export default InvestFormController;
