function log(input){
	console.log(input);
}

let x = Math.random()

log( (5>4) && true )
log( (x<1) || false )
log( (x>-1) && ( (99>1) || false ) )

log( true || (Math.random() < 0.5) )
log( true || (true || false) )
log( false || ( (true && false) || (true || false) ) )