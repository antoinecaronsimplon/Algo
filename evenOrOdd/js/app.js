
function evenOrOdd (n) {
	// n=parseInt(n);
	// return ((n & 1)==0)?true:false;
	// n=parseInt(n);
	// return (())
	if((n%2)===0){
		return 'Even'
	}else{
		return 'Odd'
	}	
}


module.exports = {
    app : evenOrOdd,
}