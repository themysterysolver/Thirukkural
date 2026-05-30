import React from 'react'
import Header from './Headerr'
import {useLocation} from 'react-router-dom';
import kurals from '../assets/thirukkural.json'

const Athigaram = (data) => {
    //console.log(data);
    const location = useLocation();
    const {start,end,name,number,translation,transliteration} = location.state || {};
    //we can either use [] or . to access the properties.
    const kural = kurals.kural.filter((item)=>item.Number>=start && item.Number<=end); 
    return (
    <>
        <Header/>
        <div className="kuralContainer">
            <h1>{number}. {name}</h1>
            {/* make sure {}  returns something*/}
            <br/>
            <div className="accordion" id="accordionPanelsStayOpenExample">
            {kural.map((block)=>{
                return(<>
                    <React.Fragment key={block.Number}>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${block.Number}`} aria-expanded="true" aria-controls={`collapse${block.Number}`}>
                            <div className="numbering">{block.Number}</div>
                            <div className='kurals'>
                                <p>{block.Line1}</p>
                                <p>{block.Line2}</p>
                            </div>
                        </button>
                        </h2>
                        <div id={`collapse${block.Number}`} className="accordion-collapse collapse">
                        <div className="accordion-body">
                            {block.mv}
                            {block.sp}
                            {block.mk}
                        </div>
                        </div>
                    </div>
                <br></br>
                </React.Fragment>
                </>)
                })}
            </div>
        </div>
    </>
  )
}

export default Athigaram
