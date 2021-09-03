import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

function Header(props) {
  const [loginModal, setLoginModal] = useState(false)
  const [signupModal, setSignupModal] = useState(false)

  const toggleLogin = () => {
    setLoginModal(!loginModal)
    setSignupModal(false)
  }

  const toggleSignup = () => {
    setSignupModal(!signupModal)
    setLoginModal(false)
  }

  return (
    <div className ="py-6 px-3 bg-gray-800 text-white md:flex text-center w-full mx-auto">
      {loginModal ? <LoginForm loginFunc={props.loginFunc} toggleFunc={toggleLogin}/> : ''}

      {signupModal ? <SignupForm toggleFunc={toggleSignup} /> : ''}

      <h1 className="text-5xl font-mono font-bold m-auto w-full text-center ">
      <NavLink to='/'>Dustin's Blog</NavLink>
    </h1>
    <nav className="w-max w-full md:absolute mx-auto mt-4 right-4 top-3">
      {props.loggedIn ? 
      <div>
        <p className=''>Welcome {props.userDetails.username}!</p>
        <button onClick={props.signoutFunc}>Sign Out</button>
      </div>
        :
        <ul>
          <button className='block' onClick={toggleLogin}>Log in</button>
          <button onClick={toggleSignup}>Sign up</button>
        </ul>
      }
    </nav>
    </div>
  )
}

export default Header
