"use client"; 

import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function Cart() {
    const { cart } = useContext(CartContext);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Savat</h1>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}  className="text-lg">{item.name}</li>
                ))}
            </ul>
        </div>
    );
}
