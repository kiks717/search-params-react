import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from './components/header/Header';
import { Blog } from './blog';
import classes from './components/fetch/FetchData.module.css'
function App() {
  const [query,setQuery] = useState('')

  return (
    <div style={{
      margin: '0',
      background:'aliceBlue',
      padding: '0', alignItems: 'center'}}>

      <Link to="/"><Header/></Link>
      <div className={classes.postFetch}>
      <input
      className={classes.inputFetch}
       type='text' 
      placeholder='Search...'
      onChange={e =>setQuery(e.target.value)}/>
      <ul 
      className={classes.ulFetch}>
          {Blog
          .filter(blog => blog.title.toLowerCase().includes(query))
          .map((post) => (
            <div>
            <li className={classes.liFetch}
            key={post.id}>
            {post.title}
            </li>
            <Link to={`/posts/${post.id}`}>
            <button
            className={classes.buttonFetch}
            >View More</button>
            </Link>
            </div>
          ))}
      </ul>
      </div>

    </div>

  );
}

export default App;
