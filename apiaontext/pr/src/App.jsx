import { Contextprovider } from './contextapi/contextapi'
import './App.css'
import Form from './contextapi/form'
import Updateuser from './contextapi/Updateuser'

function App() {


  return (
    <Contextprovider>
   <Form/>
   <Updateuser/>
    </Contextprovider>
  )
}

export default App
