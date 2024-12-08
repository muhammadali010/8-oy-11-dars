"use client"; 

import { useState } from 'react';
import products from '../data/products';

export default function Products() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Mahsulotlar</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id} className="my-2">
                        <span>{product.name} - {product.price} so'm</span>
                        <button onClick={() => addToCart(product)} className="bg-blue-500 text-white p-2 ml-2">Savatga qo'shish</button>
                    </li>
                ))}
            </ul>
            <h2 className="text-xl mt-4">Savat</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}
