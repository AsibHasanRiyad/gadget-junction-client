import React, { useEffect, useState } from 'react';
import Sam from './Sam';

const Samsung = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5007/products')
        .then(res => res.json())
        .then(data =>{
            setProducts(data)
        })
    },[])
    const samsung = products.filter(product => product.brandName === 'Samsung')
    return (
        <div>
             <div className="grid grid-cols-4 gap-10 py-10 px-4">
            {
                samsung.map(sam => <Sam key={sam._id} sam={sam}></Sam>)
            }
        </div>
        </div>
    );
};

export default Samsung;