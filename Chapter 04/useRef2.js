import { useRef } from "react";

const App = () => {
const inputRef=useRef();

const handleChange=()=>{
console.log(inputRef.current.value);
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

