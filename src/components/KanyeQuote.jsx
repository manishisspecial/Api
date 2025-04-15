'use client';
import React, { useState } from 'react';

const KanyeQuote = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://api.kanye.rest');
      const data = await res.json();
      setQuote(data.quote);
    } catch (error) {
      console.error('Error fetching Kanye quote:', error);
      setQuote('Error fetching quote!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-black text-white shadow-lg rounded-xl mt-10 text-center">
      <h2 className="text-2xl font-bold mb-4">Kanye Says...</h2>
      <button
        onClick={fetchQuote}
        className="bg-pink-500 px-5 py-2 rounded-md hover:bg-pink-600 transition"
      >
        Get Quote
      </button>
      {loading && <p className="mt-4">Loading...</p>}
      {!loading && quote && (
        <p className="mt-6 italic text-lg">“{quote}”</p>
      )}
    </div>
  );
};

export default KanyeQuote;
