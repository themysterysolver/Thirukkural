import React from 'react'

const BigBox = ({ data }) => {
    let chGroup = data.chapterGroup;
    // let athigaram = chGroup.detail[0].chapters.detail;
    // console.log(athigram);
  return (
    <div className="bigbox">
      <h1 className="paal">{data.name}</h1>
        {chGroup.detail.map((item,index)=>{
            return(
                <>
                    <h2 className="chapters">{item.name}</h2>
                    {item.chapters.detail.map((athigaram,index)=>{
                        return(<h3>{athigaram.number}. {athigaram.name}</h3>)
                    })}
                </>
            )
        })}
    </div>
  )
}

export default BigBox
