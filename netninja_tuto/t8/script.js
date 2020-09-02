window.onload = function() {
	function es5Func() {
		console.log("ES5 wayyyy");
	}
	es5Func();

	var es6Func = () => console.log("ES6 wayyyy");
	es6Func();
	
	var total=0;
	var es6Func2 =(name,age,occupation='Not Specified') => {
		let total=10-5;
		console.log(`Name : ${name}\nAge : ${age}\nOccupation : ${occupation}\nWork experience : ${total} years`);
	}

	es6Func2("huzai",25,"programmer");
	console.log(total);
}