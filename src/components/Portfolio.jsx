import React from 'react';
import { WeddingPortfolio } from './IndoorPortfolio';
import { wedding_url } from '../../src/store/bridal_page1';

function wedding(props) {
  return (
    <WeddingPortfolio dataa = {props.data} />
  );
}
export async function getStaticProps({}){
    const data = wedding_url.link

  return {
    props: {
      data
    }
  }
}


export default wedding;
