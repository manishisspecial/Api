// import React, { useState } from 'react';
import React from 'react';

function App() {
  return (
    <div className="bg-yellow-200 p-10 text-3xl font-extrabold text-blue-600 underline">
      Tailwind is working 
    </div>
  );
}

export default App;


// function App() {
//   const [name, setName] = useState('');
//   const [ageData, setAgeData] = useState(null);

//   const getAge = async () => {
//     try {
//       const response = await fetch(`https://api.agify.io/?name=${name}`);
//       const data = await response.json();
//       setAgeData(data);
//     } catch (error) {
//       console.error('Error fetching API:', error);
//     }
//   };

//   return (

//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
//       <h1 className="text-3xl font-bold mb-6 text-blue-600">Predict Age by Name</h1>

//       <div className="flex gap-2">
//         <input
//           type="text"
//           placeholder="Enter a name"
//           className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <button
//           onClick={getAge}
//           className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//         >
//           Get Age
//         </button>
//       </div>

//       <div className="text-4xl font-bold text-red-500 underline text-center mt-20">
//         Hello Tailwind!
//       </div>

//       {ageData && (
//         <div className="mt-6 bg-white p-4 rounded shadow-md w-full max-w-md text-center">
//           <p><strong>Name:</strong> {ageData.name}</p>
//           <p><strong>Predicted Age:</strong> {ageData.age}</p>
//           <p><strong>Count:</strong> {ageData.count}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
