import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import React from 'react'

interface OpenDrawerButtonProps {
  onClick: () => void
}

export const OpenDrawerButton = ({ onClick }: OpenDrawerButtonProps) => {
  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={onClick}
      sx={sx.icon}
    >
      <MenuIcon />
    </IconButton>
  )
}

const sx = {
  icon: { mr: 2, display: { sm: 'none' } }
}
