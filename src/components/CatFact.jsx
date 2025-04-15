'use client';
import React, { useState } from 'react';

function App() {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchFact = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://catfact.ninja/fact');
      const data = await res.json();
      setFact(data.fact);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching fact:', error);
      setLoading(false);
    }
  };

  return (
    <div className="text-3xl font-extrabold text-blue-600 underline">
      <h1 className="text-4xl font-bold text-red-500 underline text-center mt-20">
        Random Cat Fact
      </h1>
      <button
        onClick={fetchFact}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
      >
        Get Cat Fact
      </button>

      {loading ? (
        <p className="text-center mt-4">Loading...</p>
      ) : (
        fact && <p className="text-center mt-4">{fact}</p>
      )}
    </div>
  );
}

export default App;
