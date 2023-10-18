/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const Brand = ({ brand }) => {
  const { name, image } = brand;
  return (
    <NavLink className="flex justify-center items-center transform hover:scale-110 transition duration-500 ease-out" to={`/${name}`}>
        <div className="card ">
          <figure className="">
            <img src={image} alt="Brand" className=" w-24 md:w-36 lg:w-44 h-8 lg:h-12" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className=" text-base font-semibold md:text-xl">{name}</h2>
          </div>
        </div>
    </NavLink>
  );
};

export default Brand;
