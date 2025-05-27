import { useState } from 'react'
import Input from './components/Input'
import Div from './components/Div'

function App() {
  const [text, setText] = useState("")

  const inpFunc = (e)=> setText(e.target.value)

  return (
    <> 
      <Input  value={text} onChange={(e) => inpFunc(e)}/> 
      <Div text={text}/>
    </>
  )
}

export default App
