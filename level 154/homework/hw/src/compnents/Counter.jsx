import React from 'react';

function Counter({ count, prevCount }) {
  const getColor = () => {
    if (count > prevCount) return 'text-green-600';
    if (count < prevCount) return 'text-red-600';
    return 'text-black';
  };

  return (
    <div className={`text-6xl mb-4 ${getColor()}`}>{count} </div>
  );
}
export default Counter
