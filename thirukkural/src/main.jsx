import { StrictMode,useState,useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Athigaram from "./components/Athigaram.jsx"
import FlipContext from './components/FlipContext.jsx'

function Root(){
    const [flipVal,flipIt] = useState(false);
    useEffect(()=>{
      console.log(flipVal);
    },[flipVal])
    return (
      <BrowserRouter>
        <FlipContext.Provider value={{flipVal,flipIt}}>
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/athigaram" element={<Athigaram/>} />
        </Routes>
        </FlipContext.Provider>
      </BrowserRouter>
    )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root/>
  </StrictMode>,
)
