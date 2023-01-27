	import React,{useReducer,} from 'react'


const MyApp=()=>{
const initialState={counter:0}
const appReducer=(state, action)=>{
switch(action.type){
case 'increase':
return {counter:state.counter ++};
	case 'decrease':
	  return {counter:state.counter --};
	default:
  return {counter:state.counter};
	}
}
	 const [state, dispatch] = useReducer(appReducer, initialState);
	return (
   <>
	  <p>Current count is {state.counter}</p>
  <button onClick={()=>dispatch({type:'increase'})}>increase counter </button>
	 <button onClick={()=>dispatch({type:'decrease'})}>decrease counter</button>
  </>
)

};
	
	
	export default MyApp;
