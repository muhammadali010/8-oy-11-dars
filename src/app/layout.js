import Link from 'next/link';
import { CartProvider } from '../context/CartContext';
import '../app/globals.css';

export default function RootLayout({ children }) {
    return (
        <CartProvider>
            <html lang="en">
                <body className="bg-gray-900 text-white">
                    <header className="p-4 bg-gray-800">
                        <nav className="flex m-auto  justify-between">
                            <Link href="/" className="text-lg bg-blue-500 rounded-md p-2">Home</Link>
                            <Link href="/weather" className="text-lg bg-blue-500 rounded-md p-2">Weather</Link>
                        </nav>
                    </header>
                    <main className="container mx-auto p-6">
                        {children}
                    </main>
                </body>
            </html>
        </CartProvider>
    );
}
