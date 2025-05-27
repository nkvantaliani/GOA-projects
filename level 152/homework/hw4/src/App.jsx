
function App() {
  const arr = []
  for (let i = 0; i < 100; i++){
    arr.push(Math.random() < 0.5)
  }

  return (
    <>
      <div>{arr.map((i,index) => <p key={index}>{i ? "1" : "0"}</p>)}</div>
    </>
  )
}

export default App
