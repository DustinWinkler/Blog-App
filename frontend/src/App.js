import { useState, useEffect } from 'react'
import Header from './components/Header'
import Posts from './components/Posts'
import Post from './components/Post'
import { getUserDetails } from './api/users'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [userDetails, setUserDetails] = useState({
    username: ' ',
    id: ' ',
    isAdmin: false
  })

  useEffect(() => {
    const token = localStorage.getItem('userToken')
    if (token) {
      setLoggedIn(true)

      getUserDetails(token).then(data => {
        setUserDetails(data)
      })
    }
  }, [])

  // if successful login, sets username state and returns jwt from function
  function login(token, username) {
    getUserDetails(token).then(data => {
      setUserDetails(data)
      setLoggedIn(true)
      localStorage.setItem('userToken', token)
    })
  }

  const signout = () => {
    localStorage.removeItem('userToken')
    setLoggedIn(false)
    setUserDetails({
      username: ' ',
      id: ' ',
      isAdmin: false
    })
  }

  return (
    <div className="font-mono bg-gray-800 min-h-screen h-full">
    <Router>

      <Header userDetails={userDetails} loggedIn={loggedIn} loginFunc={login} signoutFunc={signout} />

      <Switch>
        <Route exact path='/' component={Posts}>
          <Posts loggedIn={loggedIn} userDetails={userDetails}/>
        </Route>

        <Route path='/:postid' meme={userDetails} component={Post} >
          <Post loggedIn={loggedIn} userDetails={userDetails} />
        </Route>
      </Switch>

    </Router>
    </div>
  );
}

export default App;
