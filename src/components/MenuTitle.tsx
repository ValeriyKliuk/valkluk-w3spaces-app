import Typography from '@mui/material/Typography'
import React from 'react'

interface MenuTitleProps {
  title: string
}

export const MenuTitle = ({ title }: MenuTitleProps) => {
  return (
    <Typography variant="h6" component="div" sx={sx.title}>
      {title}
    </Typography>
  )
}

const sx = {
  title: { flexGrow: 1, display: { xs: 'none', sm: 'block' } }
}
