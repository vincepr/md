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

class KundenDatenbank{
	alleKunden
	constructor(){
		this.alleKunden =[];
	}
	addKunde(vor, nach, alter, gesch){
		this.alleKunden.push(new Kunde(vor, nach, alter, gesch))
	}
	removeKunde(vor, nach){
		for (let k of this.alleKunden){
			if (k.vorname === vor && k.nachname == nach){
				console.log(k.getInfo());
			}
		}
	}
	printInfo(){
		for (let k of this.alleKunden){
			console.log(k.getInfo());
		}
	}
}

let db = new KundenDatenbank();
db.printInfo();
db.addKunde("Susanne","Schmidt",19,"weiblich");
db.printInfo();

console.log("--- ---")


let alleKunden = [];
alleKunden.push(new Kunde("Susanne","Schmidt",19,"weiblich"));
alleKunden.push(new Kunde("Aron","Griebler",17,"männlich"));
alleKunden.push(new Kunde("Dieter","Griebler",33,"männlich"));
alleKunden.push(new Kunde("Johanna","Fürst",22,"weiblich"));

for (let kunde of alleKunden){
	console.log(kunde.getInfo())
}



function hadBirthday({vorName, nachName}){
	for (let kunde of alleKunden){
		if (kunde.vorname ===vorName && kunde.nachname===nachName){
			kunde.hatteGeburtstag()
		}
	}
}

function testhadBirthday({vorname, nachname}){
	for (let kunde of alleKunden){
		if (kunde.vorname ===vorName && kunde.nachname===nachName){
			kunde.hatteGeburtstag()
		}
	}
}

console.log(alleKunden[1].alter)
hadBirthday({vorName:"Aron", nachName: "Griebler"})
console.log(alleKunden[1].alter)