import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { getPath } from '../tools/utils';
import Link from '@mui/material/Link';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import {
  AgnosticRouteObject,
  AgnosticDataRouteObject,
} from '@remix-run/router/dist/utils';

export const MenuItem = (
  route: AgnosticDataRouteObject | AgnosticRouteObject
): React.JSX.Element => {
  return (
    <ListItem key={route.id} disablePadding>
      <ListItemButton
        LinkComponent={Link}
        to={getPath(route.path)}
        sx={{ textAlign: 'center' }}
      >
        <ListItemText
          primary={
            getPath(route.path) === '/'
              ? 'HOME'
              : getPath(route.path).toUpperCase()
          }
        />
      </ListItemButton>
    </ListItem>
  );
};
