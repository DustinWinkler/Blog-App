import axios from "axios"

const getAllPosts = async () => {
  const res = await axios.get('/api/posts')
  return res.data
}

const getPost = async (postid) => {
  const res = await axios.get(`/api/posts/${postid}`)
  return res.data
}

// must be admin
const createPost = async (token, post) => {
  const res = await axios.post('/api/posts', post, {headers: {'authorization': `Bearer ${token}`}})

  return res
}

//must be author or admin
const updatePost = async (token, postid, post) => {
  const res = await axios.put(`/api/posts/${postid}`, {
    title: post.title,
    content: post.content
  }, {headers: {'authorization': `Bearer ${token}`}})

  return res
}

// must be author or admin
const deletePost = async (token, postid) => {
  const res = await axios.delete(`/api/posts/${postid}`, {headers: {'authorization': `Bearer ${token}`}})

  return res
}

export { getAllPosts, getPost, createPost, updatePost, deletePost }