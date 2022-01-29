import React from 'react'
import {wedding_url} from '../../src/store/bridal_page1'
import {Portfolio} from '../../src/components/IndoorPortfolio'
function index(props) {
    return (
      <Portfolio dataa = {props.data} />
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
  
  
  export default index;
  
