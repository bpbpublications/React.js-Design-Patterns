import React,{useLayoutEffect,useState} from 'react'

const MyApp=()=>{
const [data,setData]=useState([]);
 useLayoutEffect(()=>{
 const fetchData=async()=>{
 return fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(json => setData(json))
} ;
fetchData();
},[])
return (
<ul>{
data.length >0 && data.map(item=>{
return <li key={item.id}>{item.title}</li>
})
}</ul>
)
}
export default MyApp;
