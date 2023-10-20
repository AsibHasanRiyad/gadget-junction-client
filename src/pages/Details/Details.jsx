import { useLoaderData, useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

const Details = () => {
  const loadedData = useLoaderData();
  const { id } = useParams();
  console.log(id);
  const { user } = useContext(AuthContext);
  const email = user.email
  const data = loadedData.find((detail) => detail._id === id);
  const { brandName, name, image, details, price, rating, type } = data;
  const cartData = {brandName, name, image, details, price, rating, type, email }
  console.log(data);

  //send data to the server
  const handelCart = () => {
    fetch(`https://gadget-junction-server-dnpta2jcy-asib-hasan-riyads-projects.vercel.app/carts`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Product Added", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      });
  };
  const {loading} = useContext(AuthContext)
  if (loading) {
    return <div className=" h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
    </div>
}
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div>
          <p className="mt-6 text-sm text-blue-500 uppercase">{brandName}</p>

          <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
            {name}
          </h1>
          <button
            onClick={handelCart}
            className=" flex justify-center items-center gap-2 outline rounded p-1 my-4 text-[#FFBD26] outline-[#FFBD26] hover:outline-none hover:bg-[#FFBD26] hover:text-white transform hover:scale-105 transition duration-600 ease-in "
          >
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
