import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
const [username, setUsername] = useState('')

  function handleClick (e){
    setUsername(e.target.value)
      console.log(username)
    
  }
  
  function handleChange (e){
    setUsername(e.target.value)
    // console.log(username)
  }

  return (
   <div className='main'>
        <div className='inputs'>
          <input placeholder='usuario'
          onChange={handleChange} 
          type="text" />
        </div>

        <div className='button'>
          <button onClick={handleClick}>Cadastrar</button>
        </div>
    </div>

  
  )
}

export default App
