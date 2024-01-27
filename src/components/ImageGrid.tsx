import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import React from 'react'
import { type ImageItem } from '../model/ImageItem'

interface ImageGridProps {
  images: ImageItem[]
}
export const ImageGrid = ({ images }: ImageGridProps) => {
  return (
    <ImageList sx={sx.imageList} cols={2} rowHeight={164}>
      {images.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

const sx = {
  imageList: { width: 460, height: 460 }
}
