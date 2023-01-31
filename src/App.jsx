import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import About from "./components/About";
import Footer from "./components/Footer";
import Info from "./components/Info";
import  Interest from "./components/Interest";

function App() {
 return(
  <>
  <Info />
  <About />
  <Interest />
  <Footer />
  </>
 )
}

export default App
