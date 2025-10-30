
import './style/App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Addtask from './components/Addtask'
import { Listtask } from './components/Listtask'
import Updatetask from './components/Updatetask'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path = '/'element={<Listtask/>}/>
        <Route path = '/add'element={<Addtask/>}/>
        <Route path='/update/:id' element={<Updatetask/>}></Route>


      </Routes>
    </>
  )
}

export default App
