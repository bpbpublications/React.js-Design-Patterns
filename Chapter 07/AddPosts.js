	     import React,{useEffect} from 'react'
	export default function App() {
	  const baseUrl='https://jsonplaceholder.typicode.com';
	  
	  useEffect(()=>{
	    const postBody=JSON.stringify({
	      title:"This is a test",
	      body:"quia et suscipit\nsuscipit recusandae"
	    })
	    const addPosts=async()=>{
	      return fetch(`${baseUrl}/posts`,{
	        method:'POST',
	        body:postBody
	      }).then(response=>{
	        console.log(response)
	      })

	    };
	    addPosts();
	  },[])
	  return (
	    <div className="App">
	   
	    </div>
	  );
	}
