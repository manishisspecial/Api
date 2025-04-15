import React from 'react';
import NameFetcher from './components/NameFetcher'; 
import CatFact from './components/CatFact'; 
import DogImages from './components/DogImages'; 
import RandomJokes from './components/RandomJokes'; 

function App() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-6">Name API Component</h1>
      <NameFetcher />
      <h1 className="text-2xl font-bold text-center my-6">Cat Random Fact API Component</h1>
      <CatFact />
      <h1 className="text-2xl font-bold text-center my-6">Random Dog Images API Component</h1>
      <DogImages />
      <h1 className="text-2xl font-bold text-center my-6">Random Jokes API Component</h1>
      <RandomJokes />
    
    
    </div>
  );
}

export default App;
