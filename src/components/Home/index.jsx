import React from 'react'
import { useState } from 'react'
import BookStore from '../BookStore'
import Mycontext from '../context'
import { Container } from './style'

const Home = () => {
  const [data , setData] = useState('')
  return (
    <Container>
      <Mycontext.Provider value={{data , setData}}>
      <BookStore/>
      </Mycontext.Provider>
    </Container>
  )
}

export default Home