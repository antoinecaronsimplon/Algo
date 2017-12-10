
function getHtPrice (price) {
	var tva = (price/1.196);
	return parseFloat (tva.toFixed(2));
}


module.exports = {
    app : getHtPrice,
}