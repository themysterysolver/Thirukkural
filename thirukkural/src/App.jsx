import { useState } from 'react'
import './App.css'
import  Headerr  from './components/Headerr'
import BigBox from './components/BigBox'
import data from './assets/detail.json'

function App() {

  return (
    <>
      <Headerr />
      <br/>
      <div className="mainContainer">
        <table className="table">
          <tbody><BigBox data={data[0].section.detail[0]}/></tbody>
          <tbody><BigBox data={data[0].section.detail[1]}/></tbody>
          <tbody><BigBox data={data[0].section.detail[2]}/></tbody>
        </table>
      </div>
    </>
  )
}

export default App
//since we are using default export there is no need to use { } braces wherever we use but instead if we 
// use constant(const) it will be termed as named import and we have to use { } braces while importing it. 
