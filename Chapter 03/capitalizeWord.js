const capitalizedWord=capitalizeWords('anthony');
if(capitalizedWord)
{
sendConvertedWord(capitalizedWord)
}

function capitalizeWords(word){
if(typeof word ==='string'){
return word.toUpperCase();
	}
else{
return null;
}

}

async function sendConvertedWord(convertedWord){
  return await fetch('api.com',{
    method:'POST',
    headers:{
	      accept:'application/json'
	    },
	    body:(JSON.stringify({
	      word:convertedWord
	    }))
	  })
	}
