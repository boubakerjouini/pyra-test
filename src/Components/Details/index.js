import React from 'react'
import PropTypes from 'prop-types'
import { Box, Paper, Typography } from '@mui/material'

const classes = {
  root: {
    margin: '1rem',
    padding: '1rem',
  },
  container: {
    textAlign: 'center',
    marginBottom: '2rem',
    fontWeight: 'bold',
  },
}

const Details = ({ data }) => {
  return (
    <Box lg={8}>
      <Paper sx={classes.root}>
        <Typography variant="h5" sx={classes.container}>
          Users details
        </Typography>
        <Typography>Name : {data.name}</Typography>
        <Typography>Email : {data.email}</Typography>
        <Typography>Phone : {data.phone}</Typography>
      </Paper>
      <Paper sx={classes.root}>
        <Typography variant="h5" sx={classes.container}>
          Address
        </Typography>
        <Typography>Street : {data.address.street}</Typography>
        <Typography>Suite : {data.address.suite}</Typography>
        <Typography>City : {data.address.city}</Typography>
      </Paper>
    </Box>
  )
}
Details.propTypes = {
  data: PropTypes.object,
}
export default Details
