import { useState } from 'react'
import './App.css'
import  Headerr  from './components/Headerr'
function App() {

  return (
    <>
      <Headerr />
    </>
  )
}

export default App
//since we are using default export there is no need to use { } braces wherever we use but instead if we 
// use constant(const) it will be termed as named import and we have to use { } braces while importing it. 
