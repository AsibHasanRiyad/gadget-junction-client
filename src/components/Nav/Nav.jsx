import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);

  //toggle
  const { handelTheme } = useContext(AuthContext);

  //cart length
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(
      "https://gadget-junction-server-dnpta2jcy-asib-hasan-riyads-projects.vercel.app/carts"
    )
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);
  const userEmail = user?.email
  const totalCart = cart.filter(car => car?.email === userEmail)

  // handelLogout
  const handedLogOut = () => {
    logOut()
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  // admin
  const admin = 'riadahmedcoc@gmail.com'

  return (
    <div
      style={{
        position: "relative",
        zIndex: "3",
      }}
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
      className="px-0 py-4 text-base text-white bg-gray-900 navbar md:px-10 xl:px-20"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu text-black menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
             <li className="">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
          </li>
         {
          user?.email === admin &&  <li className="">
          <NavLink
            to="/addproduct"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Add Product
          </NavLink>
        </li>
         }
          <li className="">
            <NavLink
              to="/aboutus"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              About Us
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Contact
            </NavLink>
          </li>
          </ul>
        </div>
        <div className="cursor-pointer ">
          <Link to={"/"}>
            <img
              className=" w-80"
              src="https://i.ibb.co/DwVKqkt/gadget-junction-low-resolution-logo-color-on-transparent-background.png"
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="flex flex-row gap-8">
          <li className="transition duration-500 ease-out transform hover:scale-125 ">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
          </li>
          {
            user?.email === admin && <li className="transition duration-500 ease-out transform hover:scale-125">
            <NavLink
              to="/addproduct"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Add Product
            </NavLink>
          </li>
          }
          <li className="transition duration-500 ease-out transform hover:scale-125">
            <NavLink
              to="/aboutus"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              About Us
            </NavLink>
          </li>
          <li className="transition duration-500 ease-out transform hover:scale-125">
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* toggle */}
       <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input onChange={handelTheme} type="checkbox" />

          {/* sun icon */}
          <svg
            className="w-8 h-8 fill-current swap-on"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="w-8 h-8 fill-current swap-off"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>




        <div className="flex items-center justify-center gap-4 ml-1 ">
          <Link to={"/cart"}>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">
                    {totalCart.length}{" "}
                  </span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                {/* <div className="card-body">
                <div className="card-actions">
                  <Link to={'/cart'}>
                  <button className="text-black btn-block">
                    View cart
                  </button>
                  </Link>
                </div>
              </div> */}
              </div>
            </div>
          </Link>
          {user ? (
            <div className="dropdown dropdown-end ">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm overflow-hidden dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52"
              >
                <li>
                  <a className="justify-between">{user.displayName}</a>
                </li>
                <li>
                  <a className="justify-between">{user.email}</a>
                </li>
                <li>
                  <button onClick={handedLogOut}>Log Out</button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="text-2xl ">
              <Link to={"/login"}>Login</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
