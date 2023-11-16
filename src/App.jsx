import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Pelotas from './components/Pelotas/Pelotas'
import Mochilas from './components/Mochilas/mochilas'
import Raquetas from './components/Raquetas/Raquetas' 
import Ropa from './components/Ropa/Ropa'
import Error from './components/Error/Error'
function App() {
  return (
    <>
    <NavBar/>
      <BrowserRouter>
  
  <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:idProduct' element={<ItemDetailContainer/>}/>
        <Route path='/Contacto' element={<Contacto/>}/>
        <Route path='/Ubicacion' element={<Ubicacion/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
  </BrowserRouter>
  </>
 
  )

}
export default App
