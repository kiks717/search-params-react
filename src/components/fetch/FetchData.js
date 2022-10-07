import React, { useEffect, useState } from 'react'
import axios from 'axios'
import classes from './FetchData.module.css'
import Post from '../posts/Post'
import { useSearchParams } from 'react-router-dom';
const FetchData = () => {

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  // const [searchTitle, setSearchTitle] = useState("");
  const [searchParams, setSearchParams] = useSearchParams()
 
 useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
      setLoading(false);
    };
    loadPosts();
  }, []);

  return (
    <div className={classes.postFetch}>
            <input
            // className={classes.inputFetch}
            style={{width: '200px'}}
            value={searchParams.get('posts') || ''}
            onChange={e => {
            let posts = e.target.value
            if(posts) {
              setSearchParams(posts)
            } else {
              setSearchParams({})
            }
          }} />
          {loading ? (<h3>LOADING DATA...</h3>) : (
                  posts
                  .filter((post) => {
                  let posts = searchParams.get('posts')
                  if (!posts) return true
                  let title = post.title.toLowerCase()
                  return title.startsWith(posts.toLowerCase())
                  })
                  .map((item) => (
                  <Post
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    body={item.body}
                    posts={posts}/>
                  ))
          )}

    </div>

        
  );
}

export default FetchData
