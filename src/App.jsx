import { useState } from 'react'
import './App.css'
import NavbarInfo from './components/NavbarInfo'
import Navbar from './components/Navbar'
import MainPoster from './components/MainPoster'
import DiscountCard from './components/DiscountCard'
import DiscountsContainer from './components/DiscountsContainer'
import Categories from './components/Categories'
import Sales from './components/Sales'
import FeaturedProducts from './components/FeaturedProducts'

function App() {
  
  return (
    <>
      <NavbarInfo/>
      <Navbar/>
      <MainPoster/>
      <DiscountsContainer/>
      <Categories/>
      <Sales/>
      <FeaturedProducts/>
    </>
  )
}

export default App
