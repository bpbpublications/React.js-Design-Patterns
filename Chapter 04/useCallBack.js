import { useState, useCallback } from "react";

const App = () => {
 const [count,setCount]=useState(0);
 const handleCount = useCallback(() => {
setCount((currentValue) => currentValue + 1);
}, []);

return (
   <>
   
     <hr />
      <div>
	        Count: {count}
	        <button onClick={handleCount}>+</button>
      </div>
    </>
  );
	};
	
	export default App;
