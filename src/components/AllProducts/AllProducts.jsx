import { useEffect, useState } from "react";
import Product from "./Product";


const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('https://gadget-junction-server-dnpta2jcy-asib-hasan-riyads-projects.vercel.app/products')
        .then(res => res.json())
        .then(data =>{
            setProducts(data)
        })
    },[])
    return (
        <div data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" >
            <h1 className=" my-10 text-3xl font-bold text-center text-[#FFBD26]">Featured Products</h1>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 px-4">
            {
                products.map(product => <Product key={product._id} product={product} ></Product>)
            }
            </div>
        </div>
    );
};

export default AllProducts;