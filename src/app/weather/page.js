"use client";

import { useState } from 'react';

export default function Weather() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    const fetchWeather = async () => {
        setError(null);
        setWeather(null); 
        try {
            const locationRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
            const locationData = await locationRes.json();

            if (!locationData.results || locationData.results.length === 0) {
                setError('Shahar topilmadi.');
                return;
            }

            const { latitude, longitude } = locationData.results[0];

            const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
            const weatherData = await weatherRes.json();

            if (weatherData.current_weather) {
                setWeather(weatherData.current_weather);
            } else {
                setError('Ob-havo malumotlari topilmadi.');
            }
        } catch (err) {
            setError('Ob-havo malumotlarini olishda xatolik yuz berdi.');
        }
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold">Ob-havo Ma'lumotlari</h1>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="border p-2 mt-4 text-black"
                placeholder="Shahar nomini kiriting"
            />
            <button onClick={fetchWeather} className="bg-blue-500 text-white p-2 ml-2 rounded-md">Qidirish</button>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            {weather && (
                <div className="mt-4">
                    <p>Harorat: {weather.temperature}°C</p>
                    <p>Shamol tezligi: {weather.windspeed} km/soat</p>
                    <p>Shamol yo'nalishi: {weather.winddirection}°</p>
                    <p>Kunduzmi: {weather.is_day ? 'Ha' : 'Yo\'q'}</p>
                    <p>Yangilanish vaqti: {new Date(weather.time).toLocaleString()}</p>
                </div>
            )}
        </div>
    );
}
    