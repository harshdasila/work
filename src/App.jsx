import { useState } from 'react'
import './App.css'
import NavbarInfo from './components/NavbarInfo'
import Navbar from './components/Navbar'
import MainPoster from './components/MainPoster'
import DiscountCard from './components/DiscountCard'
import DiscountsContainer from './components/DiscountsContainer'
import Categories from './components/Categories'

function App() {
  
  return (
    <>
      <NavbarInfo/>
      <Navbar/>
      <MainPoster/>
      <DiscountsContainer/>
      <Categories/>
    </>
  )
}

export default App
