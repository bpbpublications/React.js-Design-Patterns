import React from "react";
import "./styles.css";

class App extends React.Component{
constructor(props){
super(props);
this.state = {
message: "This is a test message"
};

}
componentDidUpdate(prevProps, prevState) {
if (prevState.message !== this.state.message) {
console.log('Message state has changed.')
}

}
render(){

return <p>{this.state.message}</p>

}
	
	}
	export default App
