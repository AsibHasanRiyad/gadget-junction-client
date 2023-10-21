import { useEffect, useState } from "react";
import Product from "./Product";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('')

  const handelSearch = e =>{
    e.preventDefault();
    const form = e.target;
    const input = form.text.value;
    // console.log(input);
    setSearch(input)
  }
  console.log(search);
  useEffect(() => {
    fetch(
      "https://gadget-junction-server-dnpta2jcy-asib-hasan-riyads-projects.vercel.app/products"
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <div
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <h1 className=" my-10 text-3xl font-bold text-center text-[#FFBD26]">
        Featured Products
      </h1>
      <div className="flex items-center justify-center pb-6 md:py-0 ">
        <form onSubmit={handelSearch}>
          <div className="flex flex-row mx-4 p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className=" w-full md:w-[70vw] px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"
              type="text"
              name="text"
              placeholder="Enter Products Name"
              aria-label="Enter your email"
            />

            <button type="submit" className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              Search
            </button>
          </div>
        </form>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 px-4">
        {products.filter((item) =>{
            return search.toLocaleLowerCase() === '' ? item : item.name.toLocaleLowerCase().includes(search);
        }).map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
