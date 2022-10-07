import React from 'react'
import { Link } from 'react-router-dom'
import Header from './components/header/Header'
import Post from './components/posts/Post'

const Layout = () => {
  return (
    <div>
      <Link to='/'>
        <Header/>
      </Link>
      <Post/>
    </div>
  )
}

export default Layout
