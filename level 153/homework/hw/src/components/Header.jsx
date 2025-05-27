import React from 'react';

export default function Header({ title }) {
  return (
    <header className="bg-gray-800 p-6 shadow-md text-center text-2xl font-bold">
      {title}
    </header>
  );
}
