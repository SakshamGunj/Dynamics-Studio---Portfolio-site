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
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

        <title>Homepage</title>
        <meta name="description" content="Dynamic studio"/>
        
        <meta property="og:url" content="https://andyhardy.co"/>
        <meta property="og:title" content="Andy Hardy - Multidisciplinary Visual Creator - Andrew Hardy"/>
        <meta property="og:discription" content="I'm a creative director a background and degree in commercial and photojournalistic photography, creating films in Melbourne and Byron Bay."/>
        <meta property="og:site_name" content="Andrew Hardy" />
        <meta property="og:type" content="website" />        <meta property="og:image" content="https://andyhardy.co/media/site/fd92a6660a-1631837366/andy-meta-image-860x540-q72.jpg"/>
                                
        
   </head>
    <HomePage />
    </>
  )
}

export default index
