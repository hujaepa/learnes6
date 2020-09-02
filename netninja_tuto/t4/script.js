window.onload=function(){
	var numbers=[3,5,7];
	var total=0;
	function totalNum(num1=0,num2=0,num3=0) {
		let total=num1+num2+num3;
		console.log(total);
	}
	totalNum(...numbers);//spreading the index value in array numbers
}