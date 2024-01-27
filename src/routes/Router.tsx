import Alert from '@mui/material/Alert'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { errorMessage } from '../tools/utils'
import { About } from '../views/About'
import { Apps } from '../views/Apps'
import { DrawerAppBar } from '../views/DrawerAppBar'
import { Home } from '../views/Home'

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <DrawerAppBar />,
    errorElement: <Alert severity="error">{errorMessage('Root')}</Alert>,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Alert severity="error">{errorMessage('Home')}</Alert>
      },
      {
        path: 'about/',
        element: <About />,
        errorElement: <Alert severity="error">{errorMessage('About')}</Alert>
      },
      {
        path: 'apps/',
        element: <Apps />,
        errorElement: <Alert severity="error">{errorMessage('Apps')}</Alert>
      }
    ]
  }
])
