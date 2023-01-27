	import React,{useState} from 'react'
	
	const MyApp=()=>{
 const [counter,setCounter]=useState(0);

return (
<>
  <p>Current count is {counter}</p>
 <button onClick={()=>setCounter(counter+1)}>increase counter </button>
<button onClick={()=>setCounter(counter-1)}>decrease counter</button>
	  </>	)
1	};
	export default MyApp;
