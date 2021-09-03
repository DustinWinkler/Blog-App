import React, { useEffect, useState } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useParams } from 'react-router-dom'
import { createComment, deleteComment, getComments, updateComment } from '../api/comments'
import { getPost } from '../api/posts'
import Comment from './Comment'

function Post(props) {
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState(null)
  const [postLoading, setPostLoading] = useState(true)
  const [commentsLoading, setCommentsLoading] = useState(true)
  const [commentForm, setCommentForm] = useState(false)
  const [commentContent, setCommentContent] = useState('')
  const [editMode, setEditMode] = useState(false)
  const [editingCommentId, setEditingCommentId] = useState('')

  const postid = useParams().postid

  useEffect(() => {
    getPost(postid).then(data => {
      setPost(data)
      setTimeout(()=>{setPostLoading(false)},500)
    })

    getComments(postid).then(data => {
      setComments(data)
      setTimeout(()=>{setCommentsLoading(false)},500)
    })
  }, [postid])

  useEffect(() => {
    if (!props.loggedIn) {
      setCommentForm(false)
    }
  }, [props.loggedIn])

  useEffect(() => {
    
    if (!commentsLoading && !postLoading) {
      document.getElementById('textbox').addEventListener('keydown', e => {
        if (e.key === 'Tab') {
          e.preventDefault()
          setCommentContent(prev => prev.concat("  "))
        }
      })
    }

  }, [postLoading, commentsLoading])

  function toggleComment() {
    setCommentForm(!commentForm)
  }

  function handleCommentSubmit(e) {
    e.preventDefault()

    const token = localStorage.getItem('userToken')

    if (editMode) {
      //client side
      const indexOfCommentToUpdate = comments.findIndex((comment, i) => {
        return comment._id === editingCommentId
      })

      const newComments = comments
      newComments[indexOfCommentToUpdate].content = commentContent
      setComments(newComments)
      setCommentForm(false)
      setEditMode(false)
      setTimeout(() => {
        setCommentContent('')
      }, 400)

      //server side
      updateComment(postid, newComments[indexOfCommentToUpdate], token)
    }

    else {
      const newComment = {
        content: commentContent,
        author: {
          _id: props.userDetails.id,
          username: props.userDetails.username
        }
      }

      createComment(postid, newComment.content, token).then(res => {
        console.log(res);
        let newComment = res.data.newComment
        const authorDetails = {
          _id: props.userDetails.id,
          username: props.userDetails.username
        }
        newComment.author = authorDetails
        setComments([...comments, newComment])
        setCommentForm(false)
      })
    }
  }

  function handleCommentInput(e) {
    setCommentContent(e.target.value)
  }

  function handleCommentUpdate(comment) {
    setEditMode(true)
    setEditingCommentId(comment._id)
    setCommentContent(comment.content)
    setCommentForm(true)
  }

  function exitEditMode() {
    setEditMode(false)
    setEditingCommentId('')
    setCommentForm(false)
    setTimeout(() => {
      setCommentContent('')
    }, 400);
  }

  function handleCommentDelete(id) {
    //client side
    const indexOfCommentToDelete = comments.findIndex((comment, i) => {
      return comment._id === id
    })

    let newComments = comments
    newComments = newComments.filter((comment, i) => {
      return i !== indexOfCommentToDelete
    })
    setComments(newComments)
    setEditMode(false)
    setEditingCommentId('')

    //server side
    const token = localStorage.getItem('userToken')
    deleteComment(postid, id, token)
  }

  return (
    <div className="w-11/12 md:w-4/5 mx-auto bg-white p-8 rounded-md mt-4">
      {commentsLoading && postLoading ? 'Loading...' :
        <article>
          <h1 className="text-center text-3xl font-bold border-b pb-1">{post.title}</h1>
          <pre className='mt-3 p-1 whitespace-pre-wrap'>{post.content}</pre>

          <p className='border-b pb-1 text-right pr-8'>
            {'- ' + post.author.username}</p>

          <div className="mt-2 p-4">
            <h1 className='mt-3 mx-auto text-center font-bold text-2xl'>Comments - {comments.length}</h1>

            {/* add comment button */}
            {props.loggedIn?  
            <div>
              <button className="block text-center w-48 py-2 px-3 rounded-md mx-auto my-4 border-2 hover:border-gray-700"
              onClick={toggleComment}>
                Add Comment {commentForm ? '-':'+'}
              </button>

            </div>
            : <p className='my-3 w-full text-center'>Login to post comments :)</p> }

            {/* comment form */}

            <div className={'font-bold transition-all duration-500 overflow-hidden w-full text-center mx-auto my-4 ' + (commentForm ? 'h-60 ' : 'h-0 ')}>
              <form>
                <label className="block mt-2">
                  Comment
                </label>
                <textarea id='textbox' rows='5' className='block resize-none w-4/5 px-10 mx-auto border-2 rounded-md pl-2 py-1 focus:border-gray-700 focus:outline-none'
                value={commentContent} onChange={handleCommentInput}/>
                <button className='my-2 mr-2 border-2 rounded-md px-4 py-2 mx-auto hover:bg-gray-100 hover:border-blue-300'
                onClick={handleCommentSubmit}>
                  Submit
                </button>

                {editMode ? <button className='my-2 border-2 rounded-md px-4 py-2 mx-auto hover:bg-gray-100 hover:border-red-300' onClick={exitEditMode}>Exit Edit Mode</button> : ''}

              </form>
            </div>

            <ResponsiveMasonry columnsCountBreakPoints={{0:1, 768:2}}>
              <Masonry gutter='10px'>
                {comments.map(comment => {
                  return <Comment comment={comment} handleUpdate={handleCommentUpdate} handleDelete={()=>{handleCommentDelete(comment._id)}} userDetails={props.userDetails} />
                })}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </article>
      }
    </div>
  )
}

export default Post
