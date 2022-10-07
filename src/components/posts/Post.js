import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import classes from './Post.module.css'
const Post = () => {
  const [post,setPost] = useState([])

  const params = useParams()
  useEffect(() => {
    const loadComments = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
      );
      setPost(response.data);
    };
    loadComments();
  }, [params.id]);
  return (
    <div className={classes.postDiv}>
    <span className={classes.postSpan}>Blog from user No.{post.userId}</span>
    <h2 className={classes.postTitle}>{post.title}</h2>
    <p className={classes.postBody}>
       <br/>{post.body}</p>
    </div>

  )
}

export default Post
