import Link from '@mui/material/Link'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import {
  type AgnosticRouteObject,
  type AgnosticDataRouteObject
} from '@remix-run/router/dist/utils'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getPath } from '../tools/utils'

export const MenuItem = (
  route: AgnosticDataRouteObject | AgnosticRouteObject
): React.JSX.Element => {
  const navigate = useNavigate()
  return (
    <ListItem key={route.id} disablePadding>
      <ListItemButton
        LinkComponent={Link}
        onClick={() => {
          navigate(getPath(route.path))
        }}
        sx={sx.button}
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
  )
}

const sx = {
  button: { textAlign: 'center' }
}
