import React from 'react'
import PropTypes from 'prop-types';

const PropsDemo = ({vara,logging,children}) => { //props desctructuring 
  return (
   <>
    {vara}
    {children}
   </>
  )
}

export default PropsDemo

PropsDemo.defaultProps ={
    vara:"aaa"
}
PropsDemo.propTypes  ={ 
    vara: PropTypes.string
}
//propTypes gives only warning in the console 
