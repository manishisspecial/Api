import React, { useState } from 'react';

const NameFetcher = () => {
  const [name, setName] = useState('');
  const [result, setResult] = useState(null);

  const fetchAge = () => {
    fetch(`https://api.agify.io?name=${name}`)
      .then((res) => res.json())
      .then((data) => setResult(data));
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Name Age Predictor</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-3 border-2 border-gray-300 rounded-md mb-4"
      />

      <button
        onClick={fetchAge}
        className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
      >
        Predict Age
      </button>

      {result && (
        <div className="mt-6 p-4 bg-gray-100 rounded-md shadow-md">
          <p className="text-xl font-medium">Name: <span className="font-semibold">{result.name}</span></p>
          <p className="text-xl font-medium">Predicted Age: <span className="font-semibold">{result.age}</span></p>
          <p className="text-xl font-medium">Count: <span className="font-semibold">{result.count}</span></p>
        </div>
      )}
    </div>
  );
};

export default NameFetcher;
