import useApi from './hooks'
const App = () => {
const {data}=useApi('https://jsonplaceholder.typicode.com/todos');
return (
	<ul>
	
	  {
	    data && data.map(item=>{
	      return <>
	             <li>{item.id} {item.title} </li>
             </>
      
    })
	  }
	</ul>
	)
	};

export default App;
