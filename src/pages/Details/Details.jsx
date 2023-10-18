import { useLoaderData, useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Details = () => {
  const loadedData = useLoaderData();
  const { id } = useParams();
  console.log(id);
  const data = loadedData.find((detail) => detail._id === id);
  const { brandName, name, image, _id, details, price, rating, type } = data;
  return (
    // <div>
    //   <div className="flex flex-col items-center justify-center w-full  mx-auto my-10">
    //     <div
    //       className="w-full h-72 md:h-96 lg:h-[500px] bg-white bg-center bg-cover rounded-lg shadow-md"
    //       style={{
    //         backgroundImage: `url(${image})`,
    //         backgroundSize: "contain",
    //         backgroundRepeat: "no-repeat",
    //       }}
    //     ></div>

    //     <div className="w-56 -mt-10 overflow-hidden bg-black rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
    //       <h3 className="py-2 font-bold tracking-wide text-center text-white uppercase dark:text-white">
    //         {name}
    //       </h3>

    //       <div className="flex items-center justify-between px-3 py-2 bg-[#FFBD26] dark:bg-gray-700">
    //         <span className="font-bold text-gray-800 dark:text-gray-200">
    //           ${price}
    //         </span>
    //         <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
    //           Add to cart
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   {/* extra details */}
    //   <div className=" text-2xl mx-4 md:mx-20 space-y-4 my-6">
    //   <h1 className=" text-gray-500">
    //     <span className=" font-bold text-black">Brand Name:</span> {brandName}{" "}
    //   </h1>
    //   <h1 className=" text-gray-500">
    //     <span className=" font-bold text-black">Product Type:</span> {type}{" "}
    //   </h1>
    //   <h1 className=" text-gray-500">
    //     <span className=" font-bold text-black">Price:</span> {price}{" "}
    //   </h1>
    //   <h1 className=" text-gray-500">
    //     <span className=" font-bold text-black">Rating :</span> {rating} out of 5
    //   </h1>
    //   <h1 className=" text-gray-500">
    //     <span className=" font-bold text-black">Description :</span> {details} out of 5
    //   </h1>
    //   </div>
    // </div>
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div>
          <p className="mt-6 text-sm text-blue-500 uppercase">{brandName}</p>

          <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
            {name}
          </h1>
          <button className=" flex justify-center items-center gap-2 outline rounded p-1 my-4 text-[#FFBD26] outline-[#FFBD26] hover:outline-none hover:bg-[#FFBD26] hover:text-white transform hover:scale-105 transition duration-600 ease-in ">
            Add To Cart <FaShoppingCart></FaShoppingCart>
          </button>
        </div>
        <div className="lg:flex lg:-mx-6">
          <div className="lg:w-3/4 lg:px-6">
            <img
              className="object-cover object-center rounded-xl w-full lg:w-[70%]"
              src={image}
              alt=""
            />
          </div>

          <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
            <div>
              <h3 className="text-blue-500 capitalize">Price</h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-600 hover:underline hover:text-gray-500 dark:text-gray-400 "
              >
                ${price}
              </a>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            <div>
              <h3 className="text-blue-500 capitalize">Type</h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-600 hover:underline hover:text-gray-500 dark:text-gray-400 "
              >
                {type}
              </a>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            <div>
              <h3 className="text-blue-500 capitalize">Rating</h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-600 hover:underline hover:text-gray-500 dark:text-gray-400 "
              >
                {rating} out of 5
              </a>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            <div>
              <h3 className="text-blue-500 capitalize">Product Description</h3>

              <a
                href="#"
                className="block mt-2 font-medium text-gray-600 hover:underline hover:text-gray-500 dark:text-gray-400 "
              >
                {details}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
