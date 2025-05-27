import React, { useState } from 'react';
import Counter from './compnents/Counter';

function App() {
  const [count, setCount] = useState(0);
  const [prevCount, setPrevCount] = useState(0);

  const handleChange = (newValue) => {
    setPrevCount(count);
    setCount(newValue);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Simple Counter App</h1>

      <Counter count={count} prevCount={prevCount} />

      <div className="space-x-4 mb-6">
        <button onClick={() => handleChange(count + 1)} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl shadow">Increment</button>
        <button onClick={() => handleChange(0)} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-xl shadow">
          Reset
        </button>
        <button onClick={() => handleChange(count - 1)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl shadow">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
