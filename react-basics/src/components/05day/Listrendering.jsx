import React, { Fragment } from 'react'

const Listrendering = () => {
    let names=new Array("aaa","bbb",'ccc','dddd','eee','ffff')
    let result = names.map((name,i)=><h4 key={i}>{name}</h4>)
  return (
    <>
        {/* {names.map((name,i)=><h4 key={i}>{name}</h4>)}<br/>
        {names.map((name,i)=><Fragment key={i}>{name}</Fragment>)} <br/>

        {result} */}

        {names.map((name,i)=>{
            return <h4 key={i}>{name}</h4>
        }
            )}
    </>
  )
}

export default Listrendering
