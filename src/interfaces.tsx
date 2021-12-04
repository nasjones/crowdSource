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
	PwVisibility: boolean;
	VisibilityUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface LoginProps extends FormProps {
	FormValues: LoginData;
}

export interface SignUpProps extends FormProps {
	FormValues: SignUpData;
}
export interface AuthContent {
	auth: boolean;
	setAuth: (input: boolean) => void;
}

export interface ProductCardProps {
	id: Number;
	title: string;
	synopsis: string;
	amountSought: Number;
	fullName: string;
}
