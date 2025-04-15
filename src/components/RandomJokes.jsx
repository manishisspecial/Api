import React, { useState } from 'react';

const JokeFetcher = () => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch joke when the button is clicked
  const fetchJoke = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await res.json();
      setJoke(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching joke:', error);
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Random Joke</h2>
      
      {/* Show joke after clicking the button */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        joke && (
          <div>
            <p className="font-semibold">{joke.setup}</p>
            <p>{joke.punchline}</p>
          </div>
        )
      )}

      {/* Button to fetch a new joke */}
      <button
        onClick={fetchJoke}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition mt-4"
      >
        Get New Joke
      </button>
    </div>
  );
};

export default JokeFetcher;
