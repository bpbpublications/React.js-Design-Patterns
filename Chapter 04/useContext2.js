	import { useState,useRef,useContext,createContext } from "react";

const App = () => {
	  const appBackgroundContext=createContext();
  const [defaultColor, setDefaultColor] = useState("red");
	
	 const ComponentTwo=()=>{
	  const context=useContext(appBackgroundContext) return <div style={{backgroundColor:context}}>
	   hello
       </div>
	 }
	 const ComponentThree=()=>{
	  const context=useContext(appBackgroundContext)
	  return <div style={{backgroundColor:context}}>
	    hello
        </div>
	  }
	  const ComponentFour=()=>{
    const context=useContext(appBackgroundContext)
	    return <div style={{backgroundColor:context}}>
	      hello
	          </div>
	    }
	    const ComponentFive=()=>{
	      const context=useContext(appBackgroundContext);
	      return <div style={{color:context}}>
	        hello {context}
	            </div>
	      }
	  return (
	    <>
    
     {
       <appBackgroundContext.Provider value={defaultColor}>
         <ComponentTwo/>
         <ComponentThree/>
         <ComponentFour/>
         <ComponentFive/>
      </appBackgroundContext.Provider>
     }
    </>
  );
};

	export default App;

