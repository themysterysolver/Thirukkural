import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import FlipContext from './FlipContext';

const BigBox = ({ data }) => {
    let chGroup = data.chapterGroup;
    // let athigaram = chGroup.detail[0].chapters.detail;
    // console.log(athigram);
    let {flipVal} = useContext(FlipContext); 
    const nav = useNavigate();
  return (
    <>  
        <tr className="paal table-danger">{flipVal?<td>{data.translation} ({data.transliteration})</td>:<td>{data.name}</td>}</tr>
            {chGroup.detail.map((item,index)=>{
                return(
                     <React.Fragment key={item.name}>
                        <tr className="chapters table-info">{flipVal?<td>{item.translation} ({item.transliteration})</td>:<td>{item.name}</td>}</tr>
                        {item.chapters.detail.map((athigaram,index)=>{
                            return(<tr onClick = {()=>nav('/Athigaram',{state: athigaram})}>{flipVal?<td>{athigaram.translation} ({athigaram.transliteration}) </td>:<td>{athigaram.number}. {athigaram.name}</td>}</tr>)
                        })}
                    </React.Fragment>
                )
            })}
    </>
  )
}

export default BigBox
