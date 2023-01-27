
	import React, { useEffect, useState } from "react";
	import axios from "axios";
	
	const baseUrl = "https://jsonplaceholder.typicode.com";
	
	export default function App() {
	  const [post, setPost] = useState({});
	  useEffect(() => {
	    const getAllPosts = async () => {
	      return axios.get(`${baseUrl}/posts/1`).then((response) => {
	        setPost(response.data);
	      });
	    };
	    getAllPosts();
	  }, []);
	  return (
	    <div className="App">
	      <p>Title: {post.title}</p>
	      <p>Body: {post.body}</p>
	    </div>
	  );
	}

