function log(input){
	console.log(input);
}
function someFunction(inputBool){
	return false;
}

let num = 99;
const str = "someString";

log(1 == "1");
log(num === "99");
log(false === false === false);
log(true === true === true === true);

log("---");
log(1 == true);
log(false == 0);
log("" == 0);
log("" == false);

log("---");
log(someFunction() == 0);
log(someFunction(true) );
log( +0 === -0);
log( 99 == num == 99 )