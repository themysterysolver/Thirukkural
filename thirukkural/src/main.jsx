import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Athigaram from "./components/Athigaram.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/athigaram" element={<Athigaram/>} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
