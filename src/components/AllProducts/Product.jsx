/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Product = ({ product }) => {
  // console.log(product);
  const { brandName, name, image, _id, details, price, rating, type } = product;
  // const handelDetails = (_id) => {
  //   console.log(_id);
  // };
  return (
    <div data-aos="fade-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="card bg-base-100  transform hover:scale-[1.15] transition duration-500 ease-out">
      <figure>
        <img src={image} alt="Product" className=" w-48" />
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
              // onClick={() => handelDetails(_id)}
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

export default Product;
