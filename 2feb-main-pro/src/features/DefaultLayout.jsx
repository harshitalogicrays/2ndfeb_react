import React from 'react'
import Header from './Header'
import { Container } from 'react-bootstrap'

const DefaultLayout = ({children}) => {
  return (
   <>
    <Header/>
    <Container>
        {children}
    </Container>
   </>
  )
}

export default DefaultLayout
