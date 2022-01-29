import React from 'react';
import {WeddingPortfolio} from '../../src/components/IndoorPortfolio'
import { wedding_url } from '../../src/store/bridal_page1';

function wedding(props) {
  return (
    <>
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Weddingwork</title>
   </head>
    <WeddingPortfolio dataa = {props.data} /></>
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
