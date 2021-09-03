import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import DeletePopup from './DeletePopup'

function Comment(props) {
  const [deleting, setDeleting] = useState(false)

  useEffect(()=>{
    setDeleting(false)
  },[])

  return (
    <div key={props.comment.content} className="relative border-2 rounded-md p-2 hover:border-gray-800">
      <h1 className="text-xl font-bold text-center"
      >{props.comment.author.username}</h1>
      <pre className='whitespace-pre-wrap'>{props.comment.content}</pre>

      {props.userDetails.isAdmin ?
        <FontAwesomeIcon onClick={()=>{
          setDeleting(!deleting)
        }} 
        className="text-red-200 absolute bg-white bottom-1 right-1 p-1 text-2xl rounded-lg cursor-pointer hover:text-red-400" icon={faTrash} /> : ''}

      {props.userDetails.id === props.comment.author._id ?
        <FontAwesomeIcon onClick={()=>{
          props.handleUpdate(props.comment)
        }} 
        className="text-blue-200 absolute bg-white bottom-1 right-8 block p-1 text-2xl rounded-lg cursor-pointer hover:text-blue-400" icon={faEdit} /> 
        : ''}

      {deleting ?
        <DeletePopup toggleFunc={()=>{setDeleting(!deleting)}} deleteFunc={props.handleDelete} />
      : ''}
    </div>
  )
}

export default Comment
