import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import * as React from 'react'
import { Outlet } from 'react-router-dom'
import { DarkModeButton } from '../components/DarkModeButton'
import { MenuTitle } from '../components/MenuTitle'
import { NavigationDrawer } from '../components/NavigationDrawer'
import { OpenDrawerButton } from '../components/OpenDrawerButton'
import { TopMenu } from '../components/TopMenu'
import { Router } from '../routes/Router'

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
}

export const DrawerAppBar = ({ window }: Props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const routes = Router.routes[0].children
  const title = 'Valeriy Kliuk'

  const container =
    window !== undefined ? () => window().document.body : undefined

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  return (
    <Box sx={sx.container}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <OpenDrawerButton onClick={handleDrawerToggle} />
          <MenuTitle title={title} />
          <TopMenu routes={routes} />
          <DarkModeButton />
        </Toolbar>
      </AppBar>
      <NavigationDrawer
        container={container}
        mobileOpen={mobileOpen}
        onClick={handleDrawerToggle}
        title={title}
        routes={routes}
      />
      <Box component="main" sx={sx.main}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  )
}

const sx = {
  container: { display: 'flex' },
  main: { p: 3 }
}
