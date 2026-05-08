import { useState } from 'react'
import './App.css'
import  Headerr  from './components/Headerr'
import BigBox from './components/BigBox'
import data from './assets/detail.json'

function App() {

  return (
    <>
      <Headerr />
      <div className="container">
        <BigBox data={data[0].section.detail[0]}/>
        <BigBox data={data[0].section.detail[1]}/>
        <BigBox data={data[0].section.detail[2]}/>
      </div>
    </>
  )
}

export default App
//since we are using default export there is no need to use { } braces wherever we use but instead if we 
// use constant(const) it will be termed as named import and we have to use { } braces while importing it. 
