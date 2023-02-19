function log(input){
	console.log(input + " hoffentlich");
}

let num1 = 33;
let num2 = 22;
let num3 = 11;
function getSmallestNum(){
	let smallest = ""
	if ( (num2 >= num1) && (num2 >= num3) ) {
		smallest = "nummer 2"
	}
	else if ( (num3 >= num1) || (num3 >= num2) ) {
		smallest = "nummer 3"
	}
	else {
		smallest = "nummer 1"
	}
	return smallest
}

log("kleinste nummer ist " + getSmallestNum())