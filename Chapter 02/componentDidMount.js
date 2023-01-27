	import React from "react";
	import "./styles.css";
	
	class App extends React.Component{
	constructor(props){
	super(props);
	this.state = {
	message: "This is a test message"
	};

}
componentDidMount() {
	this.setState({
	message: "This is a new message"
	}
	);
	}
	render(){
	
	return <p>{this.state.message}</p>
	
	}
	
	}
	export default App
