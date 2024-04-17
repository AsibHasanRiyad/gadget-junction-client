/* eslint-disable react/prop-types */
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import {Link} from "react-router-dom"

const EachCart = ({ data, remaining, setRemaining }) => {
  const { brandName, name, image, _id, price, rating } = data;
  const handelDelete =(_id) =>{
    console.log(_id);
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://gadget-junction-server-dnpta2jcy-asib-hasan-riyads-projects.vercel.app/carts/${_id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                if (data.deletedCount > 0) {
                      Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          const remainingCart = remaining.filter(rem => rem._id !== _id)
          setRemaining(remainingCart)
                }
            })
        }
      })
  }
  return (
    <Link to={'/payment'}>
    <div className="flex max-w-2xl overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 my-4 lg:my-10">
    <div className="w-1/3 bg-cover " 
    style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'contain'
        }}></div>

    <div className="w-2/3 pl-2 pt-2 lg:p-4">
        <h1 className=" text-sm lg:text-xl font-bold text-gray-800 dark:text-white">{name}</h1>


        <p className="mt-2 text-xs lg:text-sm text-gray-600 dark:text-gray-400"> <span className=" font-bold">Brand Name:</span> {brandName}</p>
        <p className="mt-2 text-xs hidden md:block lg:text-sm text-gray-600 dark:text-gray-400"> <span className=" font-bold">Ratings:</span> {rating} out of 5</p>


        <div className="flex justify-between mt-3 item-center">
            <h1 className=" text-xs lg:text-lg font-bold text-gray-700 dark:text-gray-200 ">${price}</h1>
            <button
            onClick={() =>handelDelete(_id)}
            className=" text-sm  lg:text-3xl text-black dark:text-white transform hover:scale-125 p-1.5 transition duration-500 ease-out">
                <AiFillDelete></AiFillDelete>
            </button>
        </div>
    </div>
</div>
    </Link>
  );
};

export default EachCart;
