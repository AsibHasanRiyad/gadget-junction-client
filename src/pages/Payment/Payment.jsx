import { useState } from "react";
import { useLocation } from "react-router-dom"


export const Payment = () => {
   const location  = useLocation()
   const {data} = location.state 
   console.log(data);
   const [quantity, setQuantity] = useState(1)
   const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  // determine price
  console.log(data.price);
  const price = data.price
  const finalPrice = price * quantity
  return (
    <div>
      <div className="h-screen py-8 bg-gray-100">
    <div className="container px-4 mx-auto">
        <div className="flex flex-col gap-4 md:flex-row">
            <div className="md:w-3/4">
                <div className="p-6 mb-4 bg-white rounded-lg shadow-md">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="font-semibold text-left">Product</th>
                                <th className="font-semibold text-left">Price</th>
                                <th className="font-semibold text-left">Quantity</th>
                                <th className="font-semibold text-left">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-4">
                                    <div className="flex items-center">
                                        <img className="w-16 h-16 mr-4" src={data?.image} alt="Product image" />
                                        <span className="font-semibold">Product name</span>
                                    </div>
                                </td>
                                <td className="py-4">${finalPrice}</td>
                                <td className="py-4">
                                    <div className="flex items-center">
                                        <button onClick={() => decrementQuantity()} className="px-4 py-2 mr-2 border rounded-md">-</button>
                                        <span className="w-8 text-center">{quantity}</span>
                                        <button onClick={() => incrementQuantity()} className="px-4 py-2 ml-2 border rounded-md">+</button>
                                    </div>
                                </td>
                                <td className="py-4">${finalPrice}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="md:w-1/4">
                <div className="p-6 bg-white rounded-lg shadow-md">
                    <h2 className="mb-4 text-lg font-semibold">Summary</h2>
                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>${finalPrice}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Taxes</span>
                        <span>$0.00</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>$0.00</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between mb-2">
                        <span className="font-semibold">Total</span>
                        <span className="font-semibold">${finalPrice}</span>
                    </div>
                    <button className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg">Checkout</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}
