import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Routes, Route, Link } from 'react-router-dom'
import Home from '../Home'
import General from '../General'
import Users from '../Users'
import UserDetails from '../UserDetails'

const classes = {
  container: {
    backgroundColor: '#FFAD50',
    color: '#0B476D',
  },
  buttons: {
    color: '#AC6C9F',
  },
}

const Header = () => {
  return (
    <Box>
      <AppBar position="static" sx={classes.container}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, justifyContent: 'center' }}>
            Pyra test
          </Typography>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button color="inherit" variant="inherit" sx={classes.buttons}>
              Home
            </Button>
          </Link>
          <Link to="/infos" style={{ textDecoration: 'none' }}>
            <Button color="inherit" sx={classes.buttons}>
              General Info
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="infos" element={<General />} />
        <Route path="users" element={<Users />} />
        <Route path="user/:id" element={<UserDetails />} />
      </Routes>
    </Box>
  )
}

export default Header
