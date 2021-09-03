import React, { useState, useEffect } from 'react'
import { signup } from '../api/users'

function SignupForm(props) {
  const [onLoad, setOnLoad] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

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

    setError(false)
    setSuccess(false)

    const signupSuccess = await signup(username, password)
    console.log(signupSuccess)
    if (signupSuccess) {
      setSuccess(true)
      setTimeout(()=>{
        props.toggleFunc()
      }, 5000)
    } else {
      setError(true)
    }
  }

  return (
    <div id="outside" className={'absolute z-50 w-full h-screen text-center p-2 bg-gray-700 z-0 inset-0 transition-all ' + (onLoad ? 'bg-opacity-80' : 'bg-opacity-0')}>

      {success ? <div className='relative mx-auto mt-4 -mb-4 bg-green-200 border-2 border-green-700 rounded text-green-700 py-2 px-4 w-max'>
        Signup Successful <br></br>
        Go ahead and login
      </div> : ''}

      {error ? <div className='relative mx-auto mt-4 -mb-4 bg-red-200 border-2 border-red-700 rounded text-red-700 py-2 px-4 w-max'>
        There was an error signing up
      </div> : ''}

      <div className={"relative mt-12 p-6 m-auto border-2 border-gray-600 rounded-md bg-gray-100 text-black w-max h-auto transition-all "  + (onLoad ? 'inset-0' : 'top-44')}>
        <h1 className="text-3xl">Sign Up</h1>        

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

export default SignupForm

