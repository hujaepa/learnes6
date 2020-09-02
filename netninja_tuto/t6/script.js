window.onload = function() {
	/* ES6 NEW STRING METHODS
	- repeat
	- startsWith (returns boolean,can perform substring as well)
	- endsWith
	- includes
	 */
	var emp="SLS002";

	if(emp.startsWith("MAN"))
		console.log(`${emp} position is a Manager`);
	else if(emp.startsWith("SLS"))
		console.log(`${emp} position is a Salesperson`);

	var studId="COV0012020";

	if(studId.endsWith("2020"))
		console.log(`${studId} is a student whose admitted at year 2020`);

	var courseCode="PROG101";
	if(courseCode.includes("PROG"))
		console.log(`${courseCode} is a programming subject`);
	else
		console.log(`${courseCode} is not a programming subject`);
}