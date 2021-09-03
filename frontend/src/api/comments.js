import axios from 'axios'

const getComments = async (postid) => {
  const res = await axios.get(`/api/posts/${postid}/comments`)
  return res.data
}

// only signed in users
const createComment = async (postid, content, token) => {
  const res = await axios.post(`/api/posts/${postid}/comments`, {content}, {headers: {'authorization': `Bearer ${token}`}})
  return res
}

//only author or admin
const updateComment = async (postid, comment, token) => {
  const res = await axios.put(`/api/posts/${postid}/comments/${comment._id}`, {
    content: comment.content
  }, {headers: {'authorization': `Bearer ${token}`}})

  return res
}

// only author or admin
const deleteComment = async (postid, commentid, token) => {
  const res = await axios.delete(`/api/posts/${postid}/comments/${commentid}`, {headers: {'authorization': `Bearer ${token}`}})

  return res
}

export { getComments, createComment, updateComment, deleteComment  }