	import React,{useCallback} from 'react'
	const values = [3, 9, 6, 4, 2, 1];
	 const MyApp=()=>{
	  
	const callBackResult=useCallback(()=>{
	  
	   return values.sort().join(',')
	   },[])
	   
	 return (
	   <p>{callBackResult()}</p>
	 )
	 }
	 export default MyApp;
