import {useEffect,useState} from 'react';
	
	const useApi=(endpoint)=>{
  const [data,setData]=useState([]);

  useEffect(()=>{
	    const ApiCall=async()=>{
	       return fetch(endpoint).then(response=>response.json()).then(result=>{
	       setData(result)
	    })
	  };
	   ApiCall();
	},[endpoint]);
	
	  return {data}
	}
	
	export default useApi
