	import React,{useState,useEffect} from 'react'
	export default function App() {
	  const [postsArr,setPostsArr]=useState([]);
	  const baseUrl='https://jsonplaceholder.typicode.com';
	  useEffect(()=>{
	    const fetchPosts=async()=>{
	      return fetch(`${baseUrl}/posts`).then(res=>res.json()).then(response=>{
          setPostsArr(response);
	      })
	    };
	    fetchPosts();
	  },[])
	  return (
	    <div className="App">
	      {
	        postsArr.map(post=>{
	          return <ul key={post.id}>
	                  <li>{post.title}</li>
	                </ul>
	        })
	      }
	    </div>
	  );
	}
