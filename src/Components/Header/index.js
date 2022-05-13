import React, { useContext } from 'react'
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
import { SuiteContext } from '../../Contexts/Suite'
const classes = {
  container: {
    backgroundColor: '#FFAD50',
    color: '#0B476D',
  },
  buttons: {
    color: '#AC6C9F',
  },
  typoMain: { flexGrow: 1, justifyContent: 'center', display: { xs: 'none', sm: 'block' } },
  typo: { flexGrow: 1, justifyContent: 'center' },
}

const Header = () => {
  const { suite } = useContext(SuiteContext)
  const nbApt = suite || 0
  return (
    <Box>
      <AppBar position="fixed" sx={classes.container}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={classes.typoMain}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              Pyra test
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={classes.typo}>
            Suite: {nbApt ? 10 - nbApt : 0}
          </Typography>
          <Typography variant="h6" component="div" sx={classes.typo}>
            Appt: {nbApt}
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
      <Toolbar />
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
