//ES7 RAFCE
import React, { useContext } from 'react'
import data from '../assets/detail.json'   //we can also alias it like "* as data"
import { useNavigate } from 'react-router-dom'
import FlipContext from './FlipContext'

const Headerr = () => {
  const nav = useNavigate();
  const {flipVal,flipIt} = useContext(FlipContext);
  return (
    <>
    {/* <h1>wow</h1> */}
      <div className="headerr" onClick={()=>nav("/")}>
        <h1>{data[0]['tamil']}</h1>
        <button type="button" class="btn btn-danger" onClick={()=>{flipIt(prev=>!prev)}}>{flipVal?"Tamil":"English"}</button>
      </div>
    </>
    
  )
}

export default Headerr
