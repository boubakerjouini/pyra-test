import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
const classes = {
  root: {
    maxWidth: '97rem',
    height: '15rem',
    padding: '0rem 1.5rem 2rem',
    margin: 'auto',
    '&:hover': {
      backgroundColor: '#FFAD50',
      cursor: 'pointer',
    },
  },
  typo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#0B476D',
  },
}

const Cards = ({ post }) => {
  return (
    <Card sx={classes.root}>
      <CardContent>
        <Typography sx={classes.typo} gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body2">{post.body}</Typography>
      </CardContent>
    </Card>
  )
}
Cards.propTypes = {
  post: PropTypes.object,
}

export default Cards
