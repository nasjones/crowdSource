export function AttachUserToSession(token: string, username: string) {
	sessionStorage.setItem("token", token);
	sessionStorage.setItem("username", username);
}

export function ClearSession() {
	sessionStorage.clear();
}

export function CheckLogin() {
	return !!sessionStorage.getItem("token");
}

export function InitiatePaymentAuth(authURL: string) {
	window.location.href = authURL;
	return null;
}
