window.onload=function() {
	//-----------Example 1----------------//
	var x =10;

	//START OF CODE BLOCK IF//
	if(x>5) {
		let x = 5;
		console.log("inside the code block the x value is :" + x);
	}
	//END OF CODE BLOCK IF//

	console.log("outside the code block the x value is :" + x);

	//-----------Example 2----------------//
	var items =document.getElementsByTagName("li");
	
	for(let i=0;i<items.length;i++){
		items[i].onclick=function(){
			console.log(i);
		}
	}
}