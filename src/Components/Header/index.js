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
const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, justifyContent: 'center' }}>
            Pyra test
          </Typography>
          <Button color="inherit" variant="outlined">
            <Link to="/">Home</Link>
          </Button>
          <Button color="inherit">
            <Link to="/infos">General Info</Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="infos" element={<General />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </Box>
  )
}

export default Header
