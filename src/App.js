'use client';
import React, { useEffect, useState } from 'react';

function App() {
  const [fact, setFact] = useState('');

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(res => res.json())
      .then(data => setFact(data.fact));
  }, []);

  return (
    <div className='text-3xl font-extrabold text-blue-600 underline'>
      <h1 className='text-4xl font-bold text-red-500 underline text-center mt-20'>
        Random Cat Fact
      </h1>
      <p>{fact}</p>
    </div>
  );
}

export default App;
