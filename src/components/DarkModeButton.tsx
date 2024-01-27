import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import IconButton from '@mui/material/IconButton'
import useTheme from '@mui/material/styles/useTheme'
import Tooltip from '@mui/material/Tooltip'
import React from 'react'
import { ColorModeContext } from './ColorModeContext'

export const DarkModeButton = () => {
  const theme = useTheme()
  const colorMode = React.useContext(ColorModeContext)

  const darkMode = theme.palette.mode === 'dark'

  return (
    <Tooltip title={`${theme.palette.mode} mode`}>
      <IconButton
        sx={sx.icon}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {darkMode && <Brightness7Icon />}
        {!darkMode && <Brightness4Icon />}
      </IconButton>
    </Tooltip>
  )
}

const sx = {
  icon: { ml: 1 }
}
