import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const data = useLoaderData();
  const { brandName, name, image, _id, details, price, rating, type } = data;

  const handelUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const details = form.details.value;
    const rating = form.rating.value;
    const updateDetails = {
      image,
      name,
      brandName,
      type,
      price,
      details,
      rating,
    };

    fetch(`https://gadget-junction-server-dnpta2jcy-asib-hasan-riyads-projects.vercel.app/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Added Successfully",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
      });
  };
  return (
    <div>
      <div className=" mt-12 mb-20 lg:mb-32 max-w-4xl mx-auto">
        <Link to={"/"}>
          <button className=" font-rancho flex text-3xl items-center pb-8 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19.5 12H4.5M4.5 12L11.25 18.75M4.5 12L11.25 5.25"
                stroke="#331A15"
              />
            </svg>
            Back to Home
          </button>
        </Link>
        <section className="max-w-4xl mx-auto bg-gray-50 p-4 md:p-8  rounded-md shadow-md dark:bg-gray-800">
          <h1 className=" text-center text-5xl font-semibold text-[#FFBD26] font-rancho  mb-6">
            Update Product Information
          </h1>

          <form onSubmit={handelUpdate} className=" font-rale">
            <div className=" mt-4">
              <label className="text-gray-700 dark:text-gray-200">
                Image URL:
              </label>
              <input
                name="image"
                required
                type="text"
                placeholder="Image URl"
                defaultValue={image}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white   rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-gray-700 dark:text-gray-200">
                  Name:
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Product Name"
                  defaultValue={name}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white   rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 dark:text-gray-200">
                  Brand Name:
                </label>
                <input
                  name="brandName"
                  type="text"
                  defaultValue={brandName}
                  required
                  placeholder="Brand Name"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white   rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 dark:text-gray-200">
                  Product Type:
                </label>
                <input
                  name="type"
                  type="text"
                  required
                  defaultValue={type}
                  placeholder="Product Type"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white   rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 dark:text-gray-200">
                  Price:
                </label>
                <input
                  name="price"
                  type="number"
                  required
                  defaultValue={price}
                  placeholder="Price"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white   rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 dark:text-gray-200">
                  Details:
                </label>
                <input
                  name="details"
                  type="text"
                  required
                  defaultValue={details}
                  placeholder="Details"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white   rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 dark:text-gray-200">
                  Rating:
                </label>
                <input
                  name="rating"
                  type="number"
                  required
                  defaultValue={rating}
                  placeholder="rating"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white   rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div className=" w-full mt-6">
              <button
                type="submit"
                className=" w-full px-8 py-2.5 leading-5 bg-[#FFBD26] transition-colors duration-300 transform text-white text-xl border-2 rounded-md hover:bg-black font-rancho focus:outline-none focus:bg-gray-600"
              >
                Update
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Update;
