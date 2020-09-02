window.onload = function() {
	var name ="huzai";
	var age=25;

	var bio = {
		name,age,
		display(){
			console.log(`${this.name}`);
		}
	}
	bio.display();
}