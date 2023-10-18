/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user} = useContext(AuthContext)
    if (user) {
        return children
    }
    else return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;