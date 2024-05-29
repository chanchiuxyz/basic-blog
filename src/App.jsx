// import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import axios from 'axios';

import './App.css';
export default function App() {
  const [posts,setPosts] = useState({data:[],dataShow:[]})
  
  useEffect(() => {
    
    const axiosResponse = axios.get('https://jsonplaceholder.typicode.com/posts?').then(
      response => {
          setPosts({dataShow: [...posts.dataShow,...response.data.slice(0,5)],data:response.data.slice(5)})
          // console.log(posts)
        
      },
      error => {console.log('error',error)}
  
    )

  },[])

  const getMoreData = () => {
      setPosts({dataShow:[...posts.dataShow,...posts.data.slice(0,5)],data: posts.data.slice(5)})
      console.log(posts)
  }
  

// function updateData(){
//   setPosts({a:2})
// }
  
  return (
    <div>
      <ul>
       {posts.dataShow.map(
          post => {
            return (
              <li key={post.id}>
                 {post.title}
                 </li>
                )
              }
              
           )}
        </ul>

        <button onClick={getMoreData}>get 5 more</button>

    </div>
  )
}

