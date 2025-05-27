function App() {
  const arr = ["nata",'kvata','kata', 'bata']

  return (
    <>
      <div className="text-red-600">{arr.map((i,index) => <h1 className="text-center" key={index}>{i}</h1>)}</div>
    </>
  )
}

export default App
