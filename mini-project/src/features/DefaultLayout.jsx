import React from 'react'
import Header from './Header'
import { Container } from 'react-bootstrap'
import ContextData from './ContextData'

const DefaultLayout = ({children}) => {
  return (
   <>
   <ContextData>
    <Header/>
    <Container>
        {children}
    </Container>
    </ContextData>
   </>
  )
}

export default DefaultLayout
