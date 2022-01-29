import React from 'react'
import HomePage from '../src/components/HomePage'
import Head from 'next/head'

export const getStaticProps = async () => {
  return {
    props : {
      url: 'big.jpg'
    }
  }
}

function index() {
  return (
    <>
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Homepage</title>
   </head>
    <HomePage />
    </>
  )
}

export default index
