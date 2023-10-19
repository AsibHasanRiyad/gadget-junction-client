import React from "react";
import { AiFillDelete } from "react-icons/ai";

const EachCart = ({ data }) => {
  const { brandName, name, image, _id, details, price, rating, type } = data;
  return (
    <div className="flex max-w-2xl overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 my-10">
    <div className="w-1/3 bg-cover" 
    style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'contain'
        }}></div>

    <div className="w-2/3 p-4 md:p-4">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">{name}</h1>


        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400"> <span className=" font-bold">Brand Name:</span> {brandName}</p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400"> <span className=" font-bold">Ratings:</span> {rating} out of 5</p>


        <div className="flex justify-between mt-3 item-center">
            <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">${price}</h1>
            <button className=" text-3xl text-black transform hover:scale-125 p-3 transition duration-500 ease-out">
                <AiFillDelete></AiFillDelete>
            </button>
        </div>
    </div>
</div>
  );
};

export default EachCart;
