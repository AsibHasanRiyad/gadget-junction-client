/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
const One = ({ one }) => {
  const { brandName, name, image, _id, details, price, rating, type } = one;
  const handelDetails = (_id) => {
    console.log(_id);
  };
  return (
    <div className="card bg-base-50   transform hover:scale-105 transition duration-500 ease-out">
      <figure>
        <img src={image} alt="Product" className=" w-48 dark:rounded " />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h1>
          <span className=" font-bold">Brand Name:</span> {brandName}{" "}
        </h1>
        <h1>
          <span className=" font-bold">Product Type:</span> {type}{" "}
        </h1>
        <h1>
          <span className=" font-bold">Price:</span> {price}{" "}
        </h1>
        <h1>
          <span className=" font-bold">Rating :</span> {rating} out of 5
        </h1>
        <div className="card-actions justify-end">
          <Link to={`/details/${_id}`}>
            <button
              onClick={() => handelDetails(_id)}
              className="badge badge-outline hover:bg-[#FFBD26] hover:text-white transform hover:scale-105 p-3 transition duration-500 ease-out"
            >
              Details
            </button>
          </Link>
          <Link to={`/update/${_id}`}>
          <button className="badge badge-outline hover:bg-[#FFBD26] hover:text-white transform hover:scale-105 p-3 transition duration-500 ease-out">
            Update
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default One;
