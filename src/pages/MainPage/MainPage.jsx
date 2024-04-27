import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Aos from "aos";
import "aos/dist/aos.css";
// import { AuthContext } from "../../provider/AuthProvider";
// import { useContext } from "react";

const MainPage = () => {
  //   const {loading} = useContext(AuthContext)
  //   if (loading) {
  //     return <div className="flex items-center justify-center h-screen ">
  //         <span className="loading loading-spinner loading-lg"></span>
  //     </div>
  // }

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="">
      {/* ---------------messenger------------------- */}
      <MessengerCustomerChat
        pageId="<272520735953054>"
        appId="<1580465442749663>"
        htmlRef="<REF_STRING>"
      />
      {/* ----------------------------- */}
      <div
        data-aos="fade-down"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        className="bg-gray-100 "
      ></div>
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
      <div className="min-h-screen ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainPage;
