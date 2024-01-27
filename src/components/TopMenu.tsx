import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import React from 'react';
import { getPath } from '../tools/utils';
import { useNavigate } from 'react-router-dom';
import {
  AgnosticRouteObject,
  AgnosticDataRouteObject,
} from '@remix-run/router/dist/utils';

interface TopMenuProps {
  routes: (AgnosticRouteObject[] & AgnosticDataRouteObject[]) | undefined;
}

export const TopMenu = ({ routes }: TopMenuProps) => {
  const navigate = useNavigate();

  return (
    <Box sx={sx.container}>
      {routes!.map((route) => (
        <Button
          key={route.id}
          onClick={() => {
            navigate(getPath(route.path));
          }}
          sx={sx.button}
        >
          {getPath(route.path) === '/' ? 'HOME' : getPath(route.path)}
        </Button>
      ))}
    </Box>
  );
};

const sx = {
  container: { display: { xs: 'none', sm: 'block' } },
  button: { color: '#fff' },
};
