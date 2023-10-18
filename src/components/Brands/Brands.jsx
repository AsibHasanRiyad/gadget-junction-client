import { useEffect, useState } from "react";
import Brand from "./Brand";


const Brands = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() =>{
        fetch('brands.json')
        .then(res => res.json())
        .then(data => setBrands(data))
    },[])
    return (
        <div>
            <h1 className=" text-center font-bold text-[#FFBD26] text-5xl py-10">Brands</h1>
            <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                {
                    brands.map(brand => <Brand key={brand.id} brand={brand}></Brand> )
                }
            </div>
        </div>
    );
};

export default Brands;