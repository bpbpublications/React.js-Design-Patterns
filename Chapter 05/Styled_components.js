import React,{useState} from 'react';
	import styled from 'styled-components';
	
	const Button=styled.button`
	background-color:#f4ebff;
	width:50%;
	height:100px;
	border-radius:10px;
	border-color:none;
border-width:0px;
	
	`;

const Div=styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
gap:20px;
margin-top:100px
`;

const TextBox=styled.input.attrs({ type: 'text' })`
width:50%;
height:50px;
`
export default function App() {
const [name,setName]=useState('');
const onWelcomeClick=()=>{
if(name){
 alert(`Welcome ${name}`)
}
else{
alert('please enter your name')
}
}
return (
<Div>
<label>Please enter your name</label><TextBox onChange={(event)=>setName(event.target.value)}/>
    <Button onClick={onWelcomeClick}>Welcome</Button>
 </Div>
);
}
