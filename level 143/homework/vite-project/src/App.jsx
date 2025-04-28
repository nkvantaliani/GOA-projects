import { useState } from 'react'

function App() {
  const [count, use] = useState(0); 

  const plus = () => use(count + 1)

  const decrease = () => use(count - 1)

  const reset = () => use(0)

  return (
    <div className="flex flex-col items-center justify-center pt-[40vh]">
      <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">counter: {count}</h1>
      <button className="bg-pink-500 text-white px-4 py-2 rounded-xl" onClick={plus}>+1</button>
      <button className="bg-pink-500 text-white px-4 py-2 rounded-xl" onClick={reset}>reset</button>
      <button className="bg-pink-500 text-white px-4 py-2 rounded-xl" onClick={decrease}>-1</button>

      </div>
    </div>
  );
}

export default App
