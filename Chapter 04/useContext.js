	import { useState,useRef,useContext,createContext } from "react";

const App = () => {
  const appBackgroundContext=createContext();
	  const [defaultColor, setDefaultColor] = useState("red");
	
	 const ComponentTwo=(value)=>{
	 const {color}=value
	 return <div style={{backgroundColor:color}}>
	   hello
       </div>
	 }
 const ComponentThree=(value)=>{
  const {color}=value
	  return <div style={{backgroundColor:color}}>
	    hello
	        </div>
	  }
	  const ComponentFour=(value)=>{
	    const {color}=value
	    return <div style={{backgroundColor:color}}>
      hello
         </div>
    }
    const ComponentFive=(value)=>{
	      const {color}=value
	      return <div style={{color:color}}>
	        hello {color}
	            </div>
	      }
	  return (
	    <>
	    
     {
      <appBackgroundContext.Provider value={defaultColor}>
        <ComponentTwo color="red"/>
        <ComponentThree color="red"/>
        <ComponentFour color="red"/>
        <ComponentFive color="red"/>
      </appBackgroundContext.Provider>
     }
    </>
  );
	};

	export default App;
