import { useRef } from "react";

const App = () => {
const inputRef=useRef();

const handleChange=()=>{
inputRef.current.style.backgroundColor='green';
}
return (
<>
 
 <hr />
<div>
<input type="text" ref={inputRef} onChange={handleChange}/>
</div>
</>
);
};

export default App;

