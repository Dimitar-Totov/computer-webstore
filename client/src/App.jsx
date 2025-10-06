import { Route, Routes } from 'react-router'

import './App.css'
import Home from './components/home/Home'
import Navigation from './components/navigation/Navigation'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
