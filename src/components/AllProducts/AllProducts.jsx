import { useEffect, useState } from "react";
import Product from "./Product";


const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5007/products')
        .then(res => res.json())
        .then(data =>{
            setProducts(data)
        })
    },[])
    return (
        <div>
            <h1 className=" my-10 text-5xl font-bold text-center text-[#FFBD26]">All Products</h1>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 px-4">
            {
                products.map(product => <Product key={product._id} product={product} ></Product>)
            }
            </div>
        </div>
    );
};

export default AllProducts;