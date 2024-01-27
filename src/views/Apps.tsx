import { List, ListItem, Stack, Typography } from '@mui/material';
import React from 'react';
import { AppCard } from '../components/AppCard';
import { apps } from '../Model/AppCardProps';

export const Apps = () => (
  <>
    <Typography variant='h6'>
      I participated in the development of the following mobile applications.
    </Typography>
    <List component={Stack} direction='row' sx={sx.list}>
      {apps.map((itemApp) => (
        <ListItem sx={sx.app}>
          <AppCard
            title={itemApp.title}
            appStoreUrl={itemApp.appStoreUrl}
            description={itemApp.description}
            imageUrl={itemApp.imageUrl}
          />
        </ListItem>
      ))}
    </List>
  </>
);

const sx = {
  app: { width: 360, bgcolor: 'background.paper' },
  list: { alignItems: 'start' },
};
