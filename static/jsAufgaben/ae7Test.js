class Kunde{
	// --Attribute--
	vorname = "";
	nachname = "";
	alter = 0;
	geschlecht = "";
	
	//Konstruktor
	constructor(vor, nach, alt, gesch){
	        this.vorname = vor;
	        this.nachname = nach;
	        this.alter = alt;
	        this.geschlecht = gesch;
        }
        
        
	// --Methoden--
    // bei Hochzeit ect kann sich Nachname ändern
	setNachname(neuerName){
		this.nachname = neuerName;
	}
	// Jedes Jahr unvermeidbar
	hatteGeburtstag(){
		this.alter += 1;
	}
	
	// Gibt alle Kundendaten aus 
	getInfo(){
		let isVolljaehrig = false;
		if (this.alter > 17){
            isVolljaehrig = true;
        }
        return ("Kunde "+this.vorname
            + " " + this.nachname
            + " ist " + this.alter + " Jahre alt, "
            + this.geschlecht + " und "
            + (isVolljaehrig ? "volljährig" : "minderjährig")
            + ". <br>"
        );
    }
}

class TestKundenDatenbank{
	alleKunden					// [] filled with Kunde - objects
	constructor(){
		this.alleKunden =[];
	}
	addKunde(vor, nach, alter, gesch){
		this.alleKunden.push(new Kunde(vor, nach, alter, gesch))
	}
	removeKunde(vor, nach){
		for (let idx in this.alleKunden){
			if (this.alleKunden[idx].vorname === vor && this.alleKunden[idx].nachname == nach){
				// :todo	Soll den Kunden mit passendem Vor- und Nachnahmen aus dem Array entfernen
				delete alleKunden[idx]
				
			}
		}
	}
	hatteGeburtstag(vor, nach){
		// :todo	Soll für den/alle Kunden mit übereinstimmendem Namen das Alter um ein Jahr erhöhen
		for (let kunde of this.alleKunden){
			if (kunde.vorname === vor && kunde.nachname == nach){
				kunde.hatteGeburtstag();
			}
		}
	}
	printInfo(){
		for (let k of this.alleKunden){
			console.log(k.getInfo());
		}
	}
}



function playgroundTest(input){
	let db = new KundenDatenbank();
	db.addKunde("Susanne","Schmidt",19,"weiblich");
	db.addKunde("Aron","Griebler",17,"männlich");
	db.addKunde("Dieter","Griebler",33,"männlich");
	db.addKunde("Johanna","Fürst",22,"weiblich");
	if (input === `hatteGeburtstag("Aron", "Griebler")`){
		db.hatteGeburtstag("Aron", "Griebler");
	}else if (input === ``){
		db.removeKunde("Dieter","Griebler");
		db.removeKunde("Susanne","Griebler");
	} else {
		db.printInfo()
	}
}

function test(input){
	let db = new TestKundenDatenbank();
	db.addKunde("Susanne","Schmidt",19,"weiblich");
	db.addKunde("Aron","Griebler",17,"männlich");
	db.addKunde("Dieter","Griebler",33,"männlich");
	db.addKunde("Johanna","Fürst",22,"weiblich");
	if (input === `hatteGeburtstag("Aron", "Griebler")`){
		db.hatteGeburtstag("Aron", "Griebler");
	}else if (input === `removeKunde("Dieter","Griebler")`){
		db.removeKunde("Dieter","Griebler");
		db.removeKunde("Susanne","Griebler");
	} else {
		db.printInfo()
	}
}


function doTest(testInputArr, testFunction, inputFunction ){
    let name = inputFunction.name
    let noErrors = true

    function err(txt){
        noErrors = false
        console.log(txt)
        return
    }
    
    if (inputFunction.length !== testFunction.length) {
        if (name) err(`❌ ${name} does NOT have ${testFunction.length} arguments`)
        else  err(`❌ can not find the required function or object`)
        return
    }

    for (let value of testInputArr) {
        let test = testFunction(value)
        let own = inputFunction(value)
        if (own === test){
            console.log(`✅ ${name}(${value}) returns ${test}`)
        } else {
            err(`❌ ${name}(${value}) does NOT return ${test}`)
            return
        }
    }
    noErrors && console.log("✅ all checks passed. congratulations 👌")
}


let testInputArr = ["default", `hatteGeburtstag("Aron", "Griebler")`, `removeKunde("Dieter","Griebler")`]
doTest(testInputArr, test, playgroundTest)