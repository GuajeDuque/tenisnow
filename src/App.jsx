import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  const saludos = "Bienveni@s a la mejor tienda deportiva"
  

  return (
  <>
  <Navbar/>
  <ItemListContainer mensaje={saludos}/>
  </>
  )
}

export default App
