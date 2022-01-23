import React from 'react';
import IndoorPortfolio from '../../src/components/IndoorPortfolio';

 

export  function indoor({data}) {
  return <IndoorPortfolio dataa = {data} />;
}

export async function getStaticProps({req}){
    const data = ['hello.jpg']

  return {
    props: {
      data
    }
  }
}

export default indoor