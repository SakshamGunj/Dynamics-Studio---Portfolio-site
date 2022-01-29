import React from 'react';
import { wedding_url } from '../../src/store/bridal_page1';
import {IndoorPortfolio} from '../../src/components/IndoorPortfolio';
import Head from 'next/head'
 

export  function indoor({data}) {
  return (<IndoorPortfolio dataa = {data} />);
}

export async function getStaticProps(){
    const data = wedding_url.link

  return {
    props: {
      data
    }
  }
}

export default indoor