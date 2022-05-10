import React from 'react'
import { Box, Typography } from '@mui/material'
import Posts from '../Posts'
const Home = () => {
  return (
    <Box>
      <Typography justifyContent="center" variant="h2">
        Posts
      </Typography>
      <Posts />
    </Box>
  )
}

export default Home
