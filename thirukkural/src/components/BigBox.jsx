import React from 'react'
import { useNavigate } from 'react-router-dom'
const BigBox = ({ data }) => {
    let chGroup = data.chapterGroup;
    // let athigaram = chGroup.detail[0].chapters.detail;
    // console.log(athigram);
    const nav = useNavigate();
  return (
    <>  
        <tr className="paal table-danger"><td>{data.name}</td></tr>
            {chGroup.detail.map((item,index)=>{
                return(
                     <React.Fragment key={item.name}>
                        <tr className="chapters table-info"><td>{item.name}</td></tr>
                        {item.chapters.detail.map((athigaram,index)=>{
                            return(<tr onClick = {()=>nav('/Athigaram',{state: athigaram})}><td>{athigaram.number}. {athigaram.name}</td></tr>)
                        })}
                    </React.Fragment>
                )
            })}
    </>
  )
}

export default BigBox
