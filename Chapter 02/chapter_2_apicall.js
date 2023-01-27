import React,{useEffect,useState} from 'react';
const App=()=>{
const [data,setData]=useState([]);
useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>response.json())
.then(data=>setData(data)).catch(err=>console.log(err.message))
}
,[])

return(
	data.length>0 &&data.map(item=>{
return <ul key={item.id}>
	<li>{item.title}</li>
	</ul>
	})
	)
	
	}
	export default App;
