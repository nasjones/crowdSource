export interface LoginData {
	username: string;
	password: string;
	showPassword: boolean;
}

export interface LoginError {
	error: boolean;
	message: string;
}
