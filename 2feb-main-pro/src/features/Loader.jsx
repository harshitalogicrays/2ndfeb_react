import React from 'react'
import cssmodule from './loader.module.css'
import LoaderImg from '../assets/loader.gif'
import ReactDOM from 'react-dom'
const Loader = () => {
  return ReactDOM.createPortal(
    <div className={cssmodule.wrapper}>
        <div className={cssmodule.loader}>
            <img src={LoaderImg}/>
        </div>
    </div>,document.getElementById('loader')
  )
}
export default Loader
