import { useState } from 'react'
import Avatar from './components/Avatar'
import Description from './components/Description'
import Name from './components/Name'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Avatar/>
      <Description/>
      <Name/>
    </>
  )
}

export default App
