import { createContext } from "react";
import { AuthContent } from "./interfaces";

/**
 * context logic for whether a user is logged in
 */
const AuthContext = createContext<AuthContent>({
	auth: false,
	setAuth: (auth) => {},
});

export default AuthContext;
