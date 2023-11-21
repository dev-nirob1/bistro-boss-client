import { useContext } from "react";
import { AuthContext } from "../ContextProvider/Provider";

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}

export default useAuth;