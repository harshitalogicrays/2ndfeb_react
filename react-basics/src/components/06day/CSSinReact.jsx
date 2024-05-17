import React from 'react'
import Inlinecssdemo from './Inlinecssdemo'
import CSSvariable from './CSSvariable'
import './mystyle.css'
import Globalcssdemo from './globalcssdemo'
import cssmodule from './mystyle.module.css'
const CSSinReact = () => {
  return (
    <>
        <h2 className='success'>CSS Demos</h2>
        <h3 className={cssmodule.error}>module demo</h3>
        1. inline css - <Inlinecssdemo/><br/>
        2. css variable -<CSSvariable/><br/>
        3. Global CSS - <Globalcssdemo/><br/>
    </>
  )
}

export default CSSinReact
