import { createContext } from "react";
import { AuthContent } from "./interfaces";

const AuthContext = createContext<AuthContent>({
	auth: false,
	setAuth: () => {},
});

export default AuthContext;
