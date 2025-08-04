//import './App.css'
import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Game from '../components/Game'
import './App.css'
function App() {
  const [operation, setOperation] = useState('x');
  const [maxNumber, setMaxNumber] = useState(10);
  return (
    <>
        <Header />

        
        <Routes> 
            <Route exact path="/" element={<Main operation={operation}
          setOperation={setOperation} maxNumber={maxNumber} setMaxNumber={setMaxNumber} />} /> 
            <Route exact path="/play" element={<Game operation={operation}
          maxNumber={maxNumber} />} />
        </Routes>
        

        <Footer />

    </>
  )
}

export default App
