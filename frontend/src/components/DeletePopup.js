import React, { useState, useEffect } from 'react'

function DeletePopup(props) {
  const [onLoad, setOnLoad] = useState(false)

  useEffect(() => {
    setOnLoad(true)
  }, [])

  document.addEventListener('click', (e) => {
    if (e.target.id === 'outside') {
      props.toggleFunc()
    }
  })

  console.log('weiner')

  return (
    <div id="outside" className={'fixed z-50 w-full h-screen text-center p-2 bg-gray-700 z-0 inset-0 transition-all ' + (onLoad ? 'bg-opacity-80' : 'bg-opacity-0')}>
      <div className={"relative mt-12 p-6 m-auto border-2 border-gray-600 rounded-md bg-gray-100 text-black w-max h-auto transition-all "  + (onLoad ? 'inset-0' : 'top-44')}>
        <h1 className="text-3xl">Delete?</h1>

        <div className='w-full flex justify-around mt-2'>
          <button onClick={props.deleteFunc}
          className='border-2 py-2 px-4 rounded-md hover:bg-gray-100 hover:border-gray-800'>
            Yes
          </button>

          <button onClick={props.toggleFunc}
          className='border-2 py-2 px-4 rounded-md hover:bg-gray-100 hover:border-gray-800'>
            No
          </button>
        </div>

      </div>
      
    </div>
  )
}

export default DeletePopup
