import { createContext } from "react";
import { AuthContent } from "./interfaces";

const AuthContext = createContext<AuthContent>({
	auth: false,
	setAuth: (auth) => {},
});

export default AuthContext;
