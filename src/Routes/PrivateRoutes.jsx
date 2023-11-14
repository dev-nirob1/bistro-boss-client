import { useContext } from "react";
import { AuthContext } from "../ContextProvider/Provider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const location = useLocation()
    const { loading, user } = useContext(AuthContext)

    if (loading) {
       return <span className="loading loading-spinner loading-md"></span>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>

};

export default PrivateRoutes;