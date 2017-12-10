
function findNumber (number, divice) {
	var newArray = [];
	for (var i=0; i <= number.length; i++){
	var result = (number[i]%divice);
	if (result ===0){
		newArray.push (number[i]);
	}
	}
	return newArray;
}

// number.filter(function(number)){
// 	return number%divice ===0
// }


module.exports = {
    app : findNumber,
}