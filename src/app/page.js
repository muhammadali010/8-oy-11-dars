"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import products from '../app/data/products';
import posts from '../data/posts.json';

export default function Products() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (index) => {
        setCart((prevCart) => prevCart.filter((_, i) => i !== index));
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Mahsulotlarimiz</h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
                    <li key={product.id} className="flex flex-col items-start bg-gray-700 p-4 rounded-lg shadow-md">
                        <span className="text-lg font-semibold mb-2">{product.name}</span>
                        <span className="text-sm text-gray-400">Narxi: {product.price} so'm</span>
                        <button 
                            onClick={() => addToCart(product)} 
                            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
                        >
                            Savatga qo'shish
                        </button>
                    </li>
                ))}
            </ul>

            <h2 className="text-2xl font-bold mt-8">Savat</h2>
            <ul className="space-y-2 mt-4">
                {cart.map((item, index) => (
                    <li key={index} className="flex justify-between items-center bg-gray-800 p-3 rounded-lg">
                        <span>{item.name}</span>
                        <button 
                            onClick={() => removeFromCart(index)} 
                            className="text-red-400 px-3 py-1 rounded hover:text-red-600 transition duration-100"
                        >
                            O'chirish
                        </button>
                    </li>
                ))}
            </ul>

            <h2 className="text-2xl font-bold mt-8">Blog Postlari</h2>
            <ul className="space-y-2 mt-4">
                {posts.map(post => (
                    <li key={post.id} className="text-lg">
                        <Link href={`/post/${post.id}`} className="text-blue-400 hover:underline">
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
