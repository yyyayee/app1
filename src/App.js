import React from 'react'
import { Header, Content, Footer } from './func-components'
import Calendar from './class-components'

export default function App() {
  return (
    <>
    <Header/>
    <p><center><Calendar/></center></p>
    <Content/>
    <Footer/>
    </>
  )
}