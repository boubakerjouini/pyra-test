import React, { useState } from 'react'
import Cards from '../Cards'

import { Grid, Paper, Box, Container } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { usePosts } from '../../hooks/posts'
import InputBase from '@mui/material/InputBase'

const classes = {
  root: {
    maxWidth: '97rem',
    padding: '0rem 1.5rem 2rem',
    margin: 'auto',
  },
  container: {
    padding: '2rem',
  },
  search: {
    margin: 3,
    flex: 1,
    minWidth: '35vh',

    borderBottom: '1px solid black',
    display: 'block',
  },
}

const Posts = () => {
  const [posts, loading, loadPosts] = usePosts()
  const [search, setSearch] = useState('')

  const el = posts || []

  return (
    <Box sx={classes.root}>
      <Container>
        <InputBase
          sx={classes.search}
          placeholder="Search Title"
          inputProps={{ 'aria-label': 'Search Title' }}
          onChange={event => {
            setSearch(event.target.value)
          }}
        />
      </Container>
      {loading && <CircularProgress />}
      <Grid container>
        {el
          .filter(val => {
            if (search == '') return val
            else if (val.title.toLowerCase().includes(search.toLowerCase())) return val
          })
          .map(val => {
            return (
              <Grid item xs={12} md={4} key={val.id} sx={classes.container}>
                <Cards post={val} />
              </Grid>
            )
          })}
      </Grid>
    </Box>
  )
}

export default Posts
