import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { wedding_url } from '../store/bridal_page1';

export default function StandardImageList() {
  return (
    <ImageList sx={{ gridColumn: '2/-2', gridRow: '2/3' , overflowY: 'hidden'}} cols={4} rowHeight={364} gap={30} >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            style={{width: '100%', height: '100%'}}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = []
wedding_url.link.map(u => {
    itemData.push( {
        img: u,
        title: 'photo',
      },)
})