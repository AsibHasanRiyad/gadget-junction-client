import { useLoaderData } from "react-router-dom";
import EachCart from "./eachCart";


const Cart = () => {
    const loadedData = useLoaderData();
    console.log(loadedData);
    return (
        <div>
            {loadedData.length === 0 ? (
        <h1 className=" h-[100vh] flex justify-center items-center text-3xl font-semibold">
          No Product is Selected
        </h1>
      ) : (
        <div>
            <h1 className=" text-4xl text-center text-[#FFBD26] mt-10">Selected Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-20">
            {loadedData.map((data) => (
              <EachCart key={data._id} data={data}></EachCart>
            ))}
          </div>
        </div>
      )}
        </div>
    );
};

export default Cart;