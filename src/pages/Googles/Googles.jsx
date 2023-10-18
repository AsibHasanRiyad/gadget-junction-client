import { useEffect, useState } from "react";
import Google from "./Google";


const Googles = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5007/products')
        .then(res => res.json())
        .then(data =>{
            setProducts(data)
        })
    },[])
    const googles = products.filter(product => product.brandName === 'Google')
    console.log(googles);
    return (
        <div className="grid grid-cols-4 gap-10 py-10 px-4">
        {
            googles.map(google => <Google key={google._id} google={google}></Google>)
        }
    </div>
    );
};

export default Googles;