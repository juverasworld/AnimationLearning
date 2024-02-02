import { useState } from 'react'
import Home from './pages/Home'
import Canvas from './canvas'
import Coustomizer from './pages/Coustomizer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="app transition-all ease-in">
<Home/>
<Canvas/>
<Coustomizer/>


    </main>
  )
}

export default App
