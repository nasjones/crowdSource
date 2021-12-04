import React from "react";

export interface LoginData {
	username: string;
	password: string;
}

export interface ErrorStatus {
	error: boolean;
	message: string;
}

export interface SignUpData extends LoginData {
	firstName: string;
	lastName: string;
	email: string;
}

interface FormProps {
	FormValuesUpdate: React.Dispatch<React.SetStateAction<any>>;
	FormError: ErrorStatus;
	FormErrorUpdate: React.Dispatch<React.SetStateAction<any>>;
}

export interface LoginProps extends FormProps {
	FormValues: LoginData;
	PwVisibility: boolean;
	VisibilityUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SignUpProps extends FormProps {
	FormValues: SignUpData;
	PwVisibility: boolean;
	VisibilityUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface AuthContent {
	auth: boolean;
	setAuth: (input: boolean) => void;
}

export interface ProductCardInfo {
	id: number;
	title: string;
	synopsis: string;
	amountSought: string;
	fullName: string;
}

export interface ProductFullInfo extends ProductCardInfo {
	funded: string;
	description: string;
}

export interface InvestData {
	amount: number;
	productId: string;
	username: string;
}

export interface InvestControllerProps {
	AlertUpdate: React.Dispatch<React.SetStateAction<any>>;
	FormError: ErrorStatus;
	FormErrorUpdate: React.Dispatch<React.SetStateAction<any>>;
	Amount: number;
	AmountUpdate: React.Dispatch<React.SetStateAction<number>>;
}

export interface ProductData {
	title: string;
	synopsis: string;
	amountSought: string;
	description: string;
	username: string;
}

export interface ProductFormProps extends FormProps {
	FormValues: ProductData;
	AlertUpdate: React.Dispatch<React.SetStateAction<any>>;
}
