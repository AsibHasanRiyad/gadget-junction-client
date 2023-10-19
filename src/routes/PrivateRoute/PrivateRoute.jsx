/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user} = useContext(AuthContext)
    const {loading} = useContext(AuthContext)
    if (loading) {
      return <div className=" h-screen flex justify-center items-center">
          <span className="loading loading-spinner loading-lg"></span>
      </div>
  }
    if (user) {
        return children
    }
    else return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;