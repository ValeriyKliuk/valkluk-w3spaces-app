import Drawer from '@mui/material/Drawer'
import {
  type AgnosticRouteObject,
  type AgnosticDataRouteObject
} from '@remix-run/router/dist/utils'
import React from 'react'
import { MenuDrawer } from './MenuDrawer'

interface NavigationDrawerProps {
  container: (() => HTMLElement) | undefined
  mobileOpen: boolean
  onClick: () => void
  title: string
  routes: (AgnosticRouteObject[] & AgnosticDataRouteObject[]) | undefined
}
export const NavigationDrawer = ({
  container,
  mobileOpen,
  onClick,
  title,
  routes
}: NavigationDrawerProps) => {
  return (
    <nav>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={onClick}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
        sx={sx.drawer}
      >
        <MenuDrawer routes={routes} title={title} onClick={onClick} />
      </Drawer>
    </nav>
  )
}

const sx = {
  drawer: {
    display: { xs: 'block', sm: 'none' },
    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      width: 240
    }
  }
}
