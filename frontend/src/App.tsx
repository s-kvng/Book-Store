
import { Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import CreateBook from './pages/CreateBook'
import UpdateBook from './pages/UpdateBook'
import DeleteBook from './pages/DeleteBook'
import ShowBook from './pages/ShowBook'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/books/create' element={<CreateBook/>}/>
      <Route path='/books/details/:id' element={<ShowBook/>}/>
      <Route path='/books/edit/:id' element={<UpdateBook />}/>
      <Route path='/books/delete/:id' element={<DeleteBook/>}/>
      
    </Routes>
  )
}

export default App
