import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import { ToastContainer } from "react-toastify";
// import { AuthContext } from "../../provider/AuthProvider";
// import { useContext } from "react";

const MainPage = () => {
  //   const {loading} = useContext(AuthContext)
  //   if (loading) {
  //     return <div className=" h-screen flex justify-center items-center">
  //         <span className="loading loading-spinner loading-lg"></span>
  //     </div>
  // }
  return (
    <div className="">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {/* Same as */}
      <ToastContainer />
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainPage;
