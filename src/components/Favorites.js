
import {useState,useEffect} from 'react';
import Title from "./ui/Title";
import Products from 'api/products.json';
import ProductItems from './ui/ProductItems';

export default function Favorites() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(Products)
    }, [])
    return (
        <div>
            <Title>Favoriler</Title>
            <div className="grid grid-cols-8 gap-0.1 rounded-lg overflow-hidden">
                {products.length && products.map((product,index)=><ProductItems key={index} product={product} />)}
            </div>
        </div>
    )
}
