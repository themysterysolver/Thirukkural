//ES7 RAFCE
import React from 'react'
import data from '../assets/detail.json'   //we can also alias it like "* as data"
import { useNavigate } from 'react-router-dom'

const Headerr = () => {
  const nav = useNavigate();
  return (
    <>
    {/* <h1>wow</h1> */}
      <div className="headerr" onClick={()=>nav("/")}>
        <h1>{data[0]['tamil']}</h1>
      </div>
    </>
    
  )
}

export default Headerr
