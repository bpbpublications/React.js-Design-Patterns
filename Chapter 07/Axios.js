	import React,{useEffect,useState} from 'react';
	import axios from 'axios';
	
	const baseUrl='https://jsonplaceholder.typicode.com'
	
	export default function App() {
	  const [postList,setPostList]=useState([]);
	  useEffect(()=>{
	    const getAllPosts=async()=>{
	      return axios.get(`${baseUrl}/posts`).then(response=>{
	      setPostList(response.data)
	      })
	    };
	    getAllPosts()
	  },[])
	  return (
	    <div className="App">
	      {
	        postList.map(item=>{
	          return <ul><li>{item.title}</li></ul>
	        })
	      }
	    </div>
	  );
	}
