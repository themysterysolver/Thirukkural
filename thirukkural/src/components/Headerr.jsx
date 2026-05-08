//ES7 RAFCE
import React from 'react'
import data from '../assets/detail.json'   //we can also alias it like "* as data"

const Headerr = () => {
  return (
    <>
    {/* <h1>wow</h1> */}
      <div className="headerr">
        <h1>{data[0]['tamil']}</h1>
      </div>
    </>
    
  )
}

export default Headerr
