import {useRef } from 'react'
import './App.css'
import NavbarInfo from './components/NavbarInfo'
import Navbar from './components/Navbar'
import MainPoster from './components/MainPoster'
import DiscountCard from './components/DiscountCard'
import DiscountsContainer from './components/DiscountsContainer'
import Categories from './components/Categories'
import Sales from './components/Sales'
import FeaturedProducts from './components/FeaturedProducts'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

function App() {
  const tawkMessengerRef = useRef();

  const onLoad = () => {
    console.log('onLoad works!');
};

  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };

  return (
    <>
     <button onClick={handleMinimize}>Minimize the Chat</button>
      <TawkMessengerReact propertyId="65c0f3c28d261e1b5f5c8f16" widgetId="default" onLoad={onLoad}/>
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
