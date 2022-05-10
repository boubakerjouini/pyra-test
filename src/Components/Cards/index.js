import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'

const Cards = ({ post }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold' }} color="text.secondary" gutterBottom>
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
