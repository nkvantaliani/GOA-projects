import { useState } from 'react'

function App() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <>

          <div className={`${isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} min-h-screen transition-colors duration-500`}>
      {/* Header */}
      <header className={`${isDark ? 'bg-gray-800' : 'bg-blue-700'} p-6 shadow-md`}>
        <h1 className="text-3xl font-bold">Nata Kvantaliani</h1>
        <p className="text-lg">My portfolio</p>
        <button
          onClick={toggleTheme}
          className="mt-4 bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
        >
          {isDark ? '☀️ ნათელი თემა' : '🌙 მუქი თემა'}
        </button>
      </header>

      {/* Content */}
      <main className="p-6 max-w-3xl mx-auto space-y-8">

        <section className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow`}>
          <h2 className="text-2xl font-semibold mb-2">about me</h2>
          <p>15 y/o. learing react rn!!!!</p>
        </section>

      </main>
      </div>
    </>
  )
}

export default App
