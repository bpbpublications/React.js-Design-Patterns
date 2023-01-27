	const obj={
	firstname:'Anthony',
	middlename:'Onyekachukwu',
	lastname:'Okonta',
	country:'Nigeria',
	mobile:'+2348039436123'
	}
	
	const user=concatUser(obj);
	
	console.log(user) 
	  
	function concatUser(userObj){
const {firstname,middlename,lastname,country,mobile}=userObj;
 return firstname+','+middlename+','+lastname+','+country+','+mobile;

} 

