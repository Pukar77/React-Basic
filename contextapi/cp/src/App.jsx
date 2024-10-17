

import './App.css'
import { Usercontextprovider } from './context/context'
import Display from './context/Display'

function App() {


  return (
<Usercontextprovider>
<Display/>
</Usercontextprovider>
  )
}

export default App
