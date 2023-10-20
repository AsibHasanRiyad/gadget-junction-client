import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);

  //cart length 
  const [cart, setCart] = useState([]);
  useEffect(() =>{
    fetch('https://gadget-junction-server-dnpta2jcy-asib-hasan-riyads-projects.vercel.app/carts')
    .then(res => res.json())
    .then(data => setCart(data))
  },[])

  // handelLogout
  const handedLogOut = () => {
    logOut()
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div
      style={{
        position: "relative",
        zIndex: "3",
      }}
      data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"
      className="navbar bg-black text-white py-4 px-0 md:px-10 xl:px-20 text-base"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addproduct"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Add Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutus"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
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
        <div className=" cursor-pointer">
          <Link to={'/'}>
          <img
            className=" w-80"
            src="https://i.ibb.co/DwVKqkt/gadget-junction-low-resolution-logo-color-on-transparent-background.png"
            alt=""
          />
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex flex-row gap-8">
          <li className="transform hover:scale-125 transition duration-500 ease-out ">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className=" transform hover:scale-125 transition duration-500 ease-out ">
            <NavLink
              to="/addproduct"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Add Product
            </NavLink>
          </li>
          <li className="transform hover:scale-125 transition duration-500 ease-out">
            <NavLink 
              to="/aboutus"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              About Us
            </NavLink>
          </li>
          <li className=" transform hover:scale-125 transition duration-500 ease-out ">
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
        <div className=" flex justify-center items-center gap-5">
          <Link to={'/cart'}> 
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
                <span className="badge badge-sm indicator-item">{cart.length} </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              {/* <div className="card-body">
                <div className="card-actions">
                  <Link to={'/cart'}>
                  <button className=" text-black btn-block">
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
            <div>
              <Link to={"/login"}>Login</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
