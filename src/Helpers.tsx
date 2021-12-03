export function AttachUserToSession(token: string, username: string) {
	sessionStorage.setItem("token", token);
	sessionStorage.setItem("username", username);
}
