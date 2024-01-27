import { Typography } from '@mui/material';
import React from 'react';
import { appsImages } from '../model/ImageItem';
import { ImageGrid } from '../components/ImageGrid';

export const Home = () => {
  return (
    <>
      <Typography variant='h4'>Welcome to my home page!</Typography>
      <br />
      <Typography variant='h6'>I'm a Mobile Developer</Typography>
      <ImageGrid images={appsImages} />
    </>
  );
};
