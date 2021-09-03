import React, { useState, useEffect } from 'react'
import { login } from '../api/users'

function LoginForm(props) {
  const [onLoad, setOnLoad] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    setOnLoad(true)
  }, [])

  document.addEventListener('click', (e) => {
    if (e.target.id === 'outside') {
      props.toggleFunc()
    }
  })

  function handleUsernameChange(e) {
    setUsername(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const token = await login(username, password)
    console.log(token)
    if (!token) {
      setError(true)
    } else {
      props.toggleFunc()
      props.loginFunc(token, username)
    }
  }

  return (
    <div id="outside" className={'absolute z-50 w-full h-screen text-center p-2 bg-gray-700 z-0 inset-0 transition-all ' + (onLoad ? 'bg-opacity-80' : 'bg-opacity-0')}>
      <div className={"relative mt-12 p-6 m-auto border-2 border-gray-600 rounded-md bg-gray-100 text-black w-max h-auto transition-all "  + (onLoad ? 'inset-0' : 'top-44')}>
        <h1 className="text-3xl">Login</h1>

        {error ? <h1 className="text-red-500 text-sm mt-1 -mb-3">
          Incorrect Username or Password
        </h1>
        : ''}

        <form className="mt-4">
          <label>Username</label>
          <input className="pl-1 block border border-gray-600 rounded mx-auto mb-2" value={username} onChange={handleUsernameChange} />
          <label>Password</label>
          <input className="pl-1 block border border-gray-600 rounded mx-auto mb-2" value={password} onChange={handlePasswordChange} />
          <button className="border border-gray-600 px-4 py-1 rounded bg-white" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
      
    </div>
  )
}

export default LoginForm

