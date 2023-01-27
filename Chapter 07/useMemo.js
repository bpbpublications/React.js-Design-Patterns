        import React,{useMemo} from 'react'
	const values = [3, 9, 6, 4, 2, 1];
	 const MyApp=()=>{
	  
	const result=useMemo(()=>{
	  
	   return values.sort().join(',')
	   },[])
	   
	 return (
	   <p>{result}</p>
	 )
	 }
	 export default MyApp;
