import React, { useState } from 'react';

const DogImage = () => {
  const [dogImage, setDogImage] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchDogImage = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await res.json();
      setDogImage(data.message);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching dog image:', error);
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Random Dog Image</h2>
      
      <button
        onClick={fetchDogImage}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
      >
        Get Dog Image
      </button>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        dogImage && <img src={dogImage} alt="Random Dog" className="w-full h-auto rounded-md" />
      )}
    </div>
  );
};

export default DogImage;
