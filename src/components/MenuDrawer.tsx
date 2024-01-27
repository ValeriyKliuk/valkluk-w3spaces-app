import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import React from 'react';
import { MenuItem } from './MenuItem';
import {
  AgnosticRouteObject,
  AgnosticDataRouteObject,
} from '@remix-run/router/dist/utils';

interface MenuDrawerProps {
  routes: (AgnosticRouteObject[] & AgnosticDataRouteObject[]) | undefined;
  onClick: () => void;
  title: string;
}

export const MenuDrawer = ({ routes, title, onClick }: MenuDrawerProps) => (
  <Box onClick={onClick} sx={sx.container}>
    <Typography variant='h6' sx={{ my: 2 }}>
      {title}
    </Typography>
    <Divider />
    <List>{routes!.map((route) => MenuItem(route))}</List>
  </Box>
);

const sx = {
  container: { textAlign: 'center' },
};