import React, { useState } from 'react'

export const DataContext =  React.createContext() //context create

const ContextData = ({children}) => {
    let [cart,setCart]=useState([])
    let [total,setToatal]=useState(0)
  return (
   <DataContext.Provider value={{cart,total}}>
        {children}
   </DataContext.Provider>
  )
}

export default ContextData
