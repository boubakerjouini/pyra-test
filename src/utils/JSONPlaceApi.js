import axios from 'axios'

export const loadOneUser = async id => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

  return res.data
}

export const updateUser = (id, user) =>
  axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, { username: user })
