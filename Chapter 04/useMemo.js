	import React,{useMemo} from 'react'
	
	
	const MyApp=()=>{
const result=useMemo(()=>{
   return 1+1;

   },[])
   
	return (
	  <p>{result}</p>
	)
	}
	export default MyApp;

