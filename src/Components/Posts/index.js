import React, { useState } from 'react'
import Cards from '../Cards'

import { Grid, Paper, Box } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { usePosts } from '../../hooks/posts'
import InputBase from '@mui/material/InputBase'

const Posts = () => {
  const [posts, loading, loadPosts] = usePosts()
  const [search, setSearch] = useState('')
  console.log(posts)
  const el = posts || []

  return (
    <Box sx={{ flexGrow: 1 }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Title"
        inputProps={{ 'aria-label': 'Search Title' }}
        onChange={event => {
          setSearch(event.target.value)
        }}
      />
      {loading && <CircularProgress />}

      {el
        .filter(val => {
          if (search == '') return val
          else if (val.title.toLowerCase().includes(search.toLowerCase())) return val
        })
        .map(val => {
          return (
            <Paper key={val.id} sx={{ marginBottom: '2rem' }}>
              <Grid item xs={12} md={4}>
                <Cards post={val} />
              </Grid>
            </Paper>
          )
        })}
    </Box>
  )
}

export default Posts
