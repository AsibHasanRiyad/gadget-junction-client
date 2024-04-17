/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Google = ({ data }) => {
  const { brandName, name, image, _id, price, rating, type } = data;
  const handelDetails = (_id) => {
    console.log(_id);
  };
  const {user} = useContext(AuthContext)
  const admin = "riadahmedcoc@gmail.com"
  return (
    <div className="transition duration-500 ease-out transform card bg-base-50 hover:scale-105">
      <figure>
        <img src={image} alt="Product" className="w-48 dark:rounded-md" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h1>
          <span className="font-bold ">Brand Name:</span> {brandName}{" "}
        </h1>
        <h1>
          <span className="font-bold ">Product Type:</span> {type}{" "}
        </h1>
        <h1>
          <span className="font-bold ">Price:</span> {price}{" "}
        </h1>
        <h1>
          <span className="font-bold ">Rating :</span> {rating} out of 5
        </h1>
        <div className="justify-end card-actions">
          <Link to={`/details/${_id}`}>
            <button
              onClick={() => handelDetails(_id)}
              className="badge badge-outline hover:bg-[#FFBD26] hover:text-white transform hover:scale-105 p-3 transition duration-500 ease-out"
            >
              Details
            </button>
          </Link>
          {
            user?.email === admin && <Link to={`/update/${_id}`}>
            <button className="badge badge-outline hover:bg-[#FFBD26] hover:text-white transform hover:scale-105 p-3 transition duration-500 ease-out">
              Update
            </button>
            </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Google;
