import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function Main({ me, favFunc }) {
  return (
    <main className="flex-grow p-8 text-lg">
      <h2 className="text-3xl font-semibold mb-4 text-teal-400">About Me</h2>
      <p className="mb-2">Name: {me.name}</p>
      <p className="mb-2">Location: {me.location}</p>
      <p className="mb-2">Job: {me.job}</p>

      <div className="mt-6">
        <button onClick={favFunc} className="text-4xl transition duration-300">
        <FaStar color={me.fav ? "yellow" : "black"} /></button>
      </div>
    </main>
  );
}
