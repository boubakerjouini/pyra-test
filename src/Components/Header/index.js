import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Routes, Route, Link } from 'react-router-dom'
const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, justifyContent: 'center' }}>
            Pyra test
          </Typography>
          <Button color="inherit" variant="outlined">
            Home
          </Button>
          <Button color="inherit">General Info</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
