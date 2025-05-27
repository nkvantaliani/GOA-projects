import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [me, setMe] = useState({
    name: "Nata Kvantali",
    location: "Gotham",
    job: "Saving Lives",
    fav: false
  });

  const favFunc = () => {
    setMe(prev => ({ ...prev, fav: !prev.fav }));
  };

  return (
    <div className="flex flex-col min-h-screen text-white bg-gray-900 font-sans">
      <Header title="Portfolio" />
      <Main me={me} favFunc={favFunc} />
      <Footer />
    </div>
  );
}
export default App