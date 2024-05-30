import React, { useEffect, useState } from 'react'
import axios from 'axios';

import './index.css'

export default function List() {
    const [posts,setPosts] = useState({dataShow:[]})
  
    useEffect(() => {
      // npm install i axios before use axios
      axios.get('https://jsonplaceholder.typicode.com/posts?').then(
        response => {           
            setPosts({dataShow: [...response.data.slice(0,5)],data:response.data.slice(5)})
            // console.log(posts)          
        },
        error => {console.log('error',error)}
      ) 
    },[])
  
    const getMoreData = () => {
        setPosts({dataShow:[...posts.dataShow,...posts.data.slice(0,5)],data: posts.data.slice(5)})
        // console.log(posts)
    }
    
  return (
    <div className='dataList'>
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






