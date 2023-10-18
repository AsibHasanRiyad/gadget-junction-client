import { useEffect, useState } from "react";
import Apple from "./Apple";


const Apples = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5007/products')
        .then(res => res.json())
        .then(data =>{
            setProducts(data)
        })
    },[])
    const apples = products.filter(product => product.brandName === 'Apple')
    console.log(apples);
    return (
        <div className="grid grid-cols-4 gap-10 py-10 px-4">
            {
                apples.map(apple => <Apple key={apple._id} apple={apple}></Apple>)
            }
        </div>
    );
};

export default Apples;