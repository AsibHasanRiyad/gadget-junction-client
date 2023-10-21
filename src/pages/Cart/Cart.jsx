import { useLoaderData } from "react-router-dom";
import EachCart from "./eachCart";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Cart = () => {
    const loadedData = useLoaderData();
    const [remaining, setRemaining] = useState(loadedData)
    const {loading, user} = useContext(AuthContext)
    const cartEmail = user.email;
    const userCart = remaining.filter(rem => rem.email === cartEmail)
    console.log(cartEmail);
        if (loading) {
          return <div className=" h-screen flex justify-center items-center">
              <span className="loading loading-spinner loading-lg"></span>
          </div>
      }
    return (
        <div className=" dark:bg-gray-900 min-h-screen">
            {remaining.length === 0 ? (
        <h1 className=" h-[100vh] flex justify-center items-center text-3xl font-semibold">
          No Product is Selected
        </h1>
      ) : (
        <div>
            <h1 className=" text-2xl font-bold md:text-4xl text-center text-[#FFBD26] pt-10 pb-4 lg:pb-1">Selected Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:gap-10 mx-4 lg:mx-20">
            {userCart.map((data) => (
              <EachCart 
              key={data._id} 
              remaining={remaining}
              setRemaining={setRemaining}
              data={data}></EachCart>
            ))}
          </div>
        </div>
      )}
        </div>
    );
};

export default Cart;