import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const Divs = () => {
  const divs = [];
  for (let i = 0; i < 100; i++) {
    divs.push(<div key={i}>pipin</div>);
  }

};

  return (
    <>
        <div className='bg-red-500'>{divs}</div>;
    </>
  )
}

export default App
