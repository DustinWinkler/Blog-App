import axios from "axios"

const login = async (username, password) => {
  const res = await axios.post('/api/login', {username: username, password: password}).catch(e => {})

  if (res) {
    return res.data.token
  } else {

  }
}

const signup = async (username, password) => {
  const res = await axios.post('/api/signup', {username: username, password: password})


  if (res.status === 200) {
    return true
  } else {
    return false
  }
}

const getUserDetails = async (token) => {
  const res = await axios.get('/api/getuserdetails', {headers: {'Authorization': `Bearer ${token}`}})

  return res.data
  
}

export { login, signup, getUserDetails }