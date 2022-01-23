import React from 'react'
import HomePage from '../src/components/HomePage'

export const getStaticProps = async () => {
  return {
    props : {
      url: 'big.jpg'
    }
  }
}

function index() {
  return (
    <HomePage />
  )
}

export default index
