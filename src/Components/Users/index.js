import React, { useState } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import CircularProgress from '@mui/material/CircularProgress'
import { Grid, Paper, Box, Typography } from '@mui/material'
import InputBase from '@mui/material/InputBase'
import { Link } from 'react-router-dom'
import { calculate } from '../../utils'
const Users = () => {
  const querykey = ['users']
  const { isLoading, data, refetch } = useQuery(
    querykey,
    () => axios.get('https://jsonplaceholder.typicode.com/users').then(res => res.data),
    {
      refetchOnWindowFocus: false,
    },
  )
  const [search, setSearch] = useState('')

  const el = data || []
  const nbApt = calculate(data)

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Users"
          inputProps={{ 'aria-label': 'Search Title' }}
          onChange={event => {
            setSearch(event.target.value)
          }}
        />
        {isLoading && <CircularProgress />}
        <Grid>
          <Typography>Suite : {data?.length - nbApt}</Typography>
          <Typography>Apt : {nbApt}</Typography>
        </Grid>
        {el
          .filter(val => {
            if (search == '') return val
            else if (val.username.toLowerCase().includes(search.toLowerCase())) return val
          })
          .map(val => {
            return (
              <Paper key={val.id} sx={{ marginBottom: '2rem' }}>
                <Grid item xs={12} md={4}>
                  <Link to={`/user/${val.id}`}>
                    <Typography variant="h5">{val.username}</Typography>
                  </Link>
                </Grid>
              </Paper>
            )
          })}
      </Box>
    </div>
  )
}

export default Users
