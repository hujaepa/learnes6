window.onload=function() {
	const pi=3.142;

	function calcCircleArea(radius) {
		console.log(Math.round(pi*Math.pow(radius,2)));
	}

	calcCircleArea(7);
}