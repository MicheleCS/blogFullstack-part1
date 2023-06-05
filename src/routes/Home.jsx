import React, { useEffect, useState } from 'react'
import "./Home.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Home = () => {

  const [posts, setPosts] = useState([])

  const getPosts = async() => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

      const data = response.data;
      setPosts(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPosts();

  }, []);

  return (
    <div className='home'>
      <h1>Últimos Posts</h1>
      {posts.length === 0 ? <p>Carregando..</p> : (
        posts.map((post) => (
          <div className='post' key={post.id}> 
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link to={`/post/${post.id}`} className='btn'>Ler mais</Link>
          </div>
        ))
      )}
    </div>
  )
}
