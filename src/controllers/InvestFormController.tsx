import { InvestControllerProps } from "../interfaces";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useParams, useNavigate } from "react-router";
import {
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
} from "@mui/material";
import InvestFormModel from "../models/InvestFormModel";
import SubmitButton from "../views/SubmitButton";

/**
 * InvestFormController handles the functions required to operate
 * the Invest form and handles the functions via the InvestformModel
 * @param
 * @returns InvestFormController
 */
function InvestFormController({
	Amount,
	AmountUpdate,
	AlertUpdate,
}: InvestControllerProps) {
	const { id } = useParams();
	const navigate = useNavigate();
	const [submitState, toggleSubmit] = useState<boolean>(false);
	const username = window.sessionStorage.getItem("username");

	const handleChange = (evt: ChangeEvent<HTMLFormElement>) => {
		const { value } = evt.target;
		AmountUpdate(value);
	};

	const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		toggleSubmit(true);
		const response: any = await InvestFormModel.submit({
			username: username!,
			productId: id!,
			amount: Amount,
		});
		if (response.error) {
			AlertUpdate({ alert: true, message: response.message, type: "error" });
			toggleSubmit(false);
		} else {
			navigate("/processpayment", {
				state: {
					secret: response.data.client_secret,
					returnUrl: window.location.href,
				},
			});
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

			<FormControl variant="outlined" className="formInput">
				<InputLabel htmlFor="investAmount">Amount</InputLabel>
				<OutlinedInput
					id="investAmount"
					type="number"
					label="Amount"
					name="amount"
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

export default InvestFormController;
