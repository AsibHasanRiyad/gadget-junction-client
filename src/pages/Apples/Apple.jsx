/* eslint-disable react/prop-types */

const Apple = ({apple}) => {
    const {brandName, name, image, _id, details, price, rating, type} = apple
    return (
        <div className="card bg-base-50 shadow-xl transform hover:scale-105 transition duration-500 ease-out">
      <figure>
        <img
          src={image}
          alt="Product"
          className=" w-48"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          {name}
        </h2>
        <h1><span className=" font-bold">Brand Name:</span> {brandName} </h1>
        <h1><span className=" font-bold">Product Type:</span> {type} </h1>
        <h1><span className=" font-bold">Price:</span> {price} </h1>
        <h1><span className=" font-bold">Rating :</span> {rating} out of 5</h1>
        <div className="card-actions justify-end">
          <button className="badge badge-outline">Details</button>
          <button className="badge badge-outline">Update</button>
        </div>
      </div>
    </div>
    );
};

export default Apple;