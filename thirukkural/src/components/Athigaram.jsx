import React from 'react'
import Header from './Headerr'
import {useLocation} from 'react-router-dom';
import kurals from '../assets/thirukkural.json'

const Athigaram = (data) => {
    //console.log(data);
    const location = useLocation();
    const {start,end,name,number,translation,transliteration} = location.state || {};
    //we can either use [] or . to access the properties.
    const kural = kurals.kural.filter((item)=>item.Number>=start-1 && item.Number<=end-1); 
    return (
    <>
        <Header/>
        <h1>{number}. {name}</h1>
        {/* make sure {}  returns something*/}
        {kural.map((block)=>{
            return(<>
            <div>
                <p>{block.Line1}</p>
                <p>{block.Line2}</p>
            </div>
            <br></br>
            </>)
            })}
    </>
  )
}

export default Athigaram
