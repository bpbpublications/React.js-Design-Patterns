        import React,{useState,useEffect} from 'react'
	export default function App() {
	  const [post,setPost]=useState({});
	  const baseUrl='https://jsonplaceholder.typicode.com';
	  useEffect(()=>{
	    const fetchPosts=async()=>{
	      return fetch(`${baseUrl}/posts/1`).then(res=>res.json()).then(response=>{
	        setPost(response);
	      })
	    };
	    fetchPosts();
	  },[])
	  return (
	    <div className="App">
	    <p>Title: {post.title}</p>
	    <p>Body: {post.body}</p>
	    </div>
	  );
	}
