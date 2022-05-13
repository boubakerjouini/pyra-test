import React, { useState, useContext } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import CircularProgress from '@mui/material/CircularProgress'
import { Grid, Paper, Box, Typography, Container } from '@mui/material'
import InputBase from '@mui/material/InputBase'
import { Link } from 'react-router-dom'
import { calculate } from '../../utils'
import { SuiteContext } from '../../Contexts/Suite'
const classes = {
  root: {
    maxWidth: '97rem',
    padding: '0rem 1.5rem 2rem',
    margin: 'auto',
  },
  container: {
    padding: '2rem',
  },
  grid: {
    padding: '2rem',
  },
  typo: {
    color: '#0B476D',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: '#FFAD50',
      cursor: 'pointer',
    },
  },
  search: {
    margin: 3,
    flex: 1,
    minWidth: '35vh',
    borderBottom: '1px solid black',
    display: 'block',
  },
}

const Users = () => {
  const { setSuite } = useContext(SuiteContext)
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

  setSuite(nbApt)

  return (
    <div>
      <Box sx={classes.root}>
        <Container>
          <InputBase
            sx={classes.search}
            placeholder="Search Users"
            inputProps={{ 'aria-label': 'Search Title' }}
            onChange={event => {
              setSearch(event.target.value)
            }}
          />
        </Container>
        {isLoading && <CircularProgress />}

        <Grid container sx={classes.container}>
          {el
            .filter(val => {
              if (search == '') return val
              else if (val.username.toLowerCase().includes(search.toLowerCase())) return val
            })
            .map(val => {
              return (
                <Grid item xs={12} md={4} sx={classes.grid} key={val.id}>
                  <Paper>
                    <Link to={`/user/${val.id}`} style={{ textDecoration: 'none' }}>
                      <Typography variant="h5" sx={classes.typo}>
                        {val.username}
                      </Typography>
                    </Link>
                  </Paper>
                </Grid>
              )
            })}
        </Grid>
      </Box>
    </div>
  )
}

export default Users
