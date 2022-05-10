import axios from 'axios'
import { useEffect, useState } from 'react'

export const usePosts = () => {
  const [posts, setPosts] = useState()
  const [loading, setLoading] = useState(false)
  const loadPosts = () => {
    setLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      setLoading(false)
      setPosts(res.data)
    })
  }
  useEffect(loadPosts, [])

  return [posts, loading, loadPosts]
}
