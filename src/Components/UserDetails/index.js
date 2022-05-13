import { Box, Typography, Grid, InputBase, IconButton, Collapse } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { loadOneUser, updateUser } from '../../utils/JSONPlaceApi'
import { useMutation, useQuery } from 'react-query'
import EditIcon from '@mui/icons-material/Edit'
import DoneIcon from '@mui/icons-material/Done'
import CancelIcon from '@mui/icons-material/Cancel'
import Alert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress'
import CloseIcon from '@mui/icons-material/Close'

const classes = {
  root: {
    maxWidth: '97rem',
    padding: '0rem 1.5rem 2rem',
    margin: 'auto',
  },
  container: {
    padding: '2rem',
  },
  userInfo: {
    margin: 3,
  },
  search: {
    minWidth: '25vw',
    borderBottom: '1px solid black',
  },
  typo: {
    fontSize: '2rem',
  },
}

import Details from '../Details'
const UserDetails = () => {
  const { id } = useParams()
  const queryKey = ['heroesDetails']
  const { isLoading, data } = useQuery(queryKey, () => loadOneUser(id))

  const [focus, setFocus] = useState(true)
  const [user, setUser] = useState(data?.username)
  const [open, setOpen] = useState(true)

  const { mutate, isSuccess } = useMutation(
    async user => {
      await updateUser(id, user)
    },
    {
      onSuccess: () => {
        setOpen(true)
        setTimeout(() => {
          setOpen(false)
        }, 2000)
      },
    },
  )

  return (
    <Box sx={classes.root}>
      <Grid container sx={classes.container}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Grid item lg={4} sx={classes.userInfo}>
            <Box sx={classes.search}>
              <InputBase
                onChange={event => {
                  setUser(event.target.value)
                }}
                disabled={focus}
                placeholder={data?.username}
              />

              {focus ? (
                <IconButton onClick={() => setFocus(false)}>
                  <EditIcon />
                </IconButton>
              ) : (
                <>
                  <IconButton
                    onClick={() => {
                      setFocus(true), mutate(user)
                    }}
                  >
                    <DoneIcon />
                  </IconButton>
                  <IconButton onClick={() => setFocus(true)}>
                    <CancelIcon />
                  </IconButton>
                </>
              )}
            </Box>
            {isSuccess && (
              <>
                <Collapse in={open}>
                  <Alert sx={{ mb: 2 }}>User updated !</Alert>
                </Collapse>
              </>
            )}
          </Grid>
        )}
        <Grid item md={7}>
          {!isLoading ? <Details data={data} /> : <CircularProgress />}
        </Grid>
      </Grid>
    </Box>
  )
}

export default UserDetails
