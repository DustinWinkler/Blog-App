import React from 'react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { createPost, deletePost, getAllPosts, updatePost } from '../api/posts'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import DeletePopup from './DeletePopup'


function Posts(props) {
  const [posts, setPosts] = useState(null)
  const [postForm, setPostForm] = useState(null)
  const [postContent, setPostContent] = useState('')
  const [postTitle, setPostTitle] = useState('')
  const [editMode, setEditMode] = useState(false)
  const [editingPostId, setEditingPostId] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [deletingIndex, setDeletingIndex] = useState(null)

  useEffect(() => {
    getAllPosts().then(posts => {
      posts.map(post => post.shortContent = post.content.substring(0,300) + (post.content.length > 300 ? '...' : ''))
      setPosts(posts)
    })

    document.getElementById('posttextbox').addEventListener('keydown', e => {
      if (e.key === 'Tab') {
        e.preventDefault()
        setPostContent(prev => prev.concat("  "))
      }
    })
  }, [])

  function togglePost() {
    setPostForm(!postForm)
  }

  function handlePostContent(e) {
    e.preventDefault()
    setPostContent(e.target.value)
  }

  function handlePostTitle(e) {
    e.preventDefault()
    setPostTitle(e.target.value)
  }

  function handlePostSubmit(e) {
    e.preventDefault()

    const token = localStorage.getItem('userToken')

    if (editMode) {
      const indexOfPostToUpdate = posts.findIndex((comment, i) => {
        return comment._id === editingPostId
      })

      const newPosts = posts
      newPosts[indexOfPostToUpdate].content = postContent
      newPosts[indexOfPostToUpdate].title = postTitle
      newPosts[indexOfPostToUpdate].shortContent = newPosts[indexOfPostToUpdate].content.substring(0,300) + (newPosts[indexOfPostToUpdate].content.length > 300 ? '...' : '')
      setPosts(newPosts)
      setPostForm(false)
      setEditMode(false)
      setTimeout(() => {
        setPostContent('')
        setPostTitle('')
      }, 400)

      //server side
      updatePost(token, editingPostId, newPosts[indexOfPostToUpdate])

    } else {
      const newPost = {
        comments: [],
        author: props.userDetails.id,
        title: postTitle,
        content: postContent
      }
  
      createPost(token, newPost).then(res => {
        const newPost = res.data
        newPost.content = postContent
        newPost.title = postTitle
        newPost.shortContent = newPost.content.substring(0,300) + (newPost.content.length > 300 ? '...' : '')
        newPost.author = {
          username: props.userDetails.username
        }
        console.log(newPost);
        setPosts([...posts, newPost])
        setPostForm(false)
      })
    }
  }

  function handlePostUpdate(post) {
    setEditMode(true)
    setEditingPostId(post._id)
    setPostTitle(post.title)
    setPostContent(post.content)
    setPostForm(true)
  }

  function handlePostDelete() {
    const id = posts[deletingIndex]._id
    let newPosts = posts
    newPosts = newPosts.filter((post, i) => {
      return i !== deletingIndex
    })
    setPosts(newPosts)
    setDeleting(false)
    setDeletingIndex(null)

    //server side
    const token = localStorage.getItem('userToken')
    deletePost(token, id)
  }

  function exitEditMode() {
    setEditMode(false)
    setEditingPostId('')
    setPostForm(false)
    setTimeout(() => {
      setPostContent('')
      setPostTitle('')
    }, 400);
  }

  return (
    <div className="w-4/5 mx-auto mt-4">
      {(props.loggedIn && props.userDetails.isAdmin) ?
      <div>
        <button className="block text-center w-48 py-2 bg-white px-3 rounded-md mx-auto -mt-4 mb-4 border-2 hover:border-gray-700 hover:bg-gray-100"
        onClick={togglePost}>
          Add Post {postForm ? '-':'+'}
        </button>
      </div>
      : '' }

        <div className={'font-bold transition-all duration-500 bg-white overflow-hidden w-4/5 rounded-md border-2 box-border text-center mx-auto my-4 ' + (postForm ? 'max-h-screen border-gray-500' : 'max-h-0 border-gray-800')}>
        <form>
          <label className="block mt-2">
            Title
          </label>
          <input className='block resize-none w-4/5 px-10 mx-auto border-2 rounded-md pl-2 py-1 focus:border-gray-700 focus:outline-none'
          value={postTitle} onChange={handlePostTitle}/>

          <label className="block mt-2">
            Content
          </label>
          <textarea id='posttextbox' rows='15' className='block resize-none w-4/5 px-10 mx-auto border-2 rounded-md pl-2 py-1 focus:border-gray-700 focus:outline-none'
          value={postContent} onChange={handlePostContent}/>
          <button className='my-2 border-2 rounded-md px-4 py-2 mx-auto mr-2 hover:bg-gray-100 hover:border-blue-200'
          onClick={handlePostSubmit}>
            Submit
          </button>
          {editMode ? <button className='my-2 border-2 rounded-md px-4 py-2 mx-auto hover:bg-gray-100 hover:border-red-200' onClick={exitEditMode}>Exit Edit Mode</button> : ''}
        </form>
      </div>

      <ResponsiveMasonry className='w-full'
      columnsCountBreakPoints={{0:1, 768:2}}>
        <Masonry gutter='15px'>
          {!posts ? "Loading..." : 
            posts.map((post, i) => {
              return (
                <div key={i} className="relative border-2 bg-white w-full inline-block p-4 pb-8 box-border rounded-md hover:border-gray-500 hover:bg-gray-100 cursor-pointer">
                  <NavLink key={post._id} to={`/${post._id}`} className="w-max">
                  <h1 className="text-2xl mb-2 text-center font-bold">{post.title}</h1>
                  <p className="whitespace-pre-wrap">{post.shortContent}</p>    
                  <div className='border-b -mx-3 pb-2 mb-2'></div>              
                  </NavLink>

                  <p className='absolute'
                  >{'- ' + post.author.username}</p>

                  {(props.loggedIn && props.userDetails.isAdmin) ? 
                    <div>
                      <FontAwesomeIcon onClick={()=>{
                          setDeleting(true)
                          setDeletingIndex(i)
                      }} 
                      className="text-red-200 absolute bg-white bottom-2 right-1 p-1 text-2xl rounded-lg z-10 hover:text-red-400" icon={faTrash} />

                      <FontAwesomeIcon onClick={()=>{
                        handlePostUpdate(post)
                      }} 
                      className="text-blue-200 absolute bg-white bottom-2 right-8 block p-1 text-2xl rounded-lg hover:text-blue-400" icon={faEdit} />
                    
                    </div>
                    
                    
                  : ''}

                    
                </div>
                
              )
            })}
        </Masonry>
      </ResponsiveMasonry>

      {deleting ?
                        <DeletePopup toggleFunc={()=>{setDeleting(!deleting)}} deleteFunc={()=>{handlePostDelete()}} />
                      : ''}
    </div>
  )
}

export default Posts
