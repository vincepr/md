"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[5217],{3905:(e,n,r)=>{r.d(n,{Zo:()=>m,kt:()=>h});var a=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=a.createContext({}),c=function(e){var n=a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},m=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},o="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),o=c(r),f=t,h=o["".concat(l,".").concat(f)]||o[f]||g[f]||i;return r?a.createElement(h,s(s({ref:n},m),{},{components:r})):a.createElement(h,s({ref:n},m))}));function h(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,s=new Array(i);s[0]=f;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u[o]="string"==typeof e?e:t,s[1]=u;for(var c=2;c<i;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6264:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>o,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=r(7462),t=(r(7294),r(3905));const i={},s="PHP - LAGER-Aufgabe",u={unversionedId:"fiae/Programmierung/Grundlagen/phpLager",id:"fiae/Programmierung/Grundlagen/phpLager",title:"PHP - LAGER-Aufgabe",description:"UML",source:"@site/docs/fiae/Programmierung/Grundlagen/phpLager.md",sourceDirName:"fiae/Programmierung/Grundlagen",slug:"/fiae/Programmierung/Grundlagen/phpLager",permalink:"/md/fiae/Programmierung/Grundlagen/phpLager",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/fiae/Programmierung/Grundlagen/phpLager.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PHP",permalink:"/md/fiae/Programmierung/Grundlagen/php"},next:{title:"Betriebliche Anwendungen",permalink:"/md/fiae/Software/betriebliche_anwendungen"}},l={},c=[{value:"UML",id:"uml",level:2},{value:"code - urspr\xfcngliches Modell:",id:"code---urspr\xfcngliches-modell",level:2},{value:"Ausgabe",id:"ausgabe",level:3},{value:"code - Modell erweitern",id:"code---modell-erweitern",level:2},{value:"Ausgabe",id:"ausgabe-1",level:3}],m={toc:c};function o(e){let{components:n,...i}=e;return(0,t.kt)("wrapper",(0,a.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"php---lager-aufgabe"},"PHP - LAGER-Aufgabe"),(0,t.kt)("h2",{id:"uml"},"UML"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Alt text",src:r(9838).Z,width:"1041",height:"1695"})),(0,t.kt)("h2",{id:"code---urspr\xfcngliches-modell"},"code - urspr\xfcngliches Modell:"),(0,t.kt)("p",null,"Anhand des uml-Diagramms erstellen der Klassen:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},'class Lagerartikel{\n    protected $artikelID;\n    protected $name;\n    protected $menge;\n    protected $warenwert;\n\n    public function __construct(string $name){\n        $this->artikelID = rand(1,999999);\n        $this->name = $name;\n        $this->menge = 0;\n        $this->warenwert = rand(1,10);\n    }\n    public function einlagern(int $anzahl){\n        $this->menge += $anzahl;\n    }\n    public function auslagern(int $anzahl){\n        if ($anzahl <= $this->menge)   {$this->menge -= $anzahl;}\n    }\n    public function echoLagerwert(){\n        echo $this->name."-Warenwert : ".$this->menge * $this->warenwert ." \u20ac <br>";\n    }\n    public function getMenge(){\n        return $this->menge;\n    }\n}\n\nclass KannVerkaufsraum extends Lagerartikel{\n    protected $mengeVerkaufsraum = 0;\n\n    public function inVerkaufsraumStellen(int $anzahl){\n        if($anzahl <= $this->menge)\n        self::auslagern($anzahl);\n        $this->mengeVerkaufsraum += $anzahl;\n    }\n    public function echoWertVerkaufsraum(){\n        echo $this->name."-VerkaufsraumsWert : ".$this->mengeVerkaufsraum * $this->warenwert ." \u20ac <br>";\n    }\n}\n\nclass Getraenk extends KannVerkaufsraum{\n    protected $isAlkoholfrei;\n    protected $volumen="1 Liter";\n    protected $pfand=0.15;\n\n    public function __construct(string $name, bool $isAlkoholfrei){\n        parent::__construct($name);\n        $this->isAlkoholfrei = $isAlkoholfrei;\n    }\n    public function echoGesamtPfand(){\n        echo "PfandWert im Lager: ".$this->pfand*$this->menge."<br>";\n        echo "PfandWert im Verkaufsraum: ".$this->pfand*$this->mengeVerkaufsraum."<br>";\n    }\n}\n\nclass Snack extends KannVerkaufsraum{\n    protected $isSalzig;\n    protected $gewicht;\n\n    public function __construct(string $name, float $gewicht, bool $isSalzig){\n        parent::__construct($name);\n        $this->gewicht = $gewicht;\n        $this->isSalzig = $isSalzig;\n    }\n    public function echoGesamtGewicht(){\n        echo "Gesamtgewicht im Lager: ".$this->gewicht*$this->menge/1000 ." kg <br>";\n        echo "Gesamtgewicht im Verkaufsraum: ".$this->gewicht*$this->mengeVerkaufsraum/1000 ." kg <br>";\n        return $this->gewicht*$this->menge;\n    }\n}\n\n// erstellen unseres Lagers\n$lager = [];\n$lager[] = new Snack("Snickers",57,false);\n$lager[] = new Snack("Chips",200,true);\n$lager[] = new Getraenk("cola", true);\n$lager[] = new Getraenk("bier", false);\n$lager[] = new Getraenk("wein", false);\n\n// bef\xfcllen unseres Lagers:\nforeach($lager as $art){\n    $art->einlagern(100);                       // 100 artikel ins Lager stellen\n    $halbeMenge = round( $art->getMenge() / 4 );\n    $art->inVerkaufsraumStellen($halbeMenge);   //ein Viertel, also 25 in Verkaufsraum stellen\n}\n\n// ausgeben unserer Werte:\nforeach($lager as $art){\n    $art->echoLagerwert();                      //echo des Lager-Wert\n    $art->echoWertVerkaufsraum();               //echo des Werts im Verkaufsraum\n\n    if($art instanceof Snack){\n        $art->echoGesamtGewicht();              //echo der 2 Gewichts-Summen (Lager/Verkaufsraum) wenn Snack\n\n    }else if ($art instanceof Getraenk){\n        $art->echoGesamtPfand();              //echo der 2 Pfand-Summen (Lager/Verkaufsraum) wenn Snack\n    }\n\n    echo"----------------<br>";\n}\n')),(0,t.kt)("h3",{id:"ausgabe"},"Ausgabe"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"Snickers-Warenwert : 525 \u20ac\nSnickers-VerkaufsraumsWert : 175 \u20ac\nGesamtgewicht im Lager: 4.275 kg\nGesamtgewicht im Verkaufsraum: 1.425 kg\n----------------\nChips-Warenwert : 75 \u20ac\nChips-VerkaufsraumsWert : 25 \u20ac\nGesamtgewicht im Lager: 15 kg\nGesamtgewicht im Verkaufsraum: 5 kg\n----------------\ncola-Warenwert : 750 \u20ac\ncola-VerkaufsraumsWert : 250 \u20ac\nPfandWert im Lager: 11.25\nPfandWert im Verkaufsraum: 3.75\n----------------\nbier-Warenwert : 300 \u20ac\nbier-VerkaufsraumsWert : 100 \u20ac\nPfandWert im Lager: 11.25\nPfandWert im Verkaufsraum: 3.75\n----------------\nwein-Warenwert : 600 \u20ac\nwein-VerkaufsraumsWert : 200 \u20ac\nPfandWert im Lager: 11.25\nPfandWert im Verkaufsraum: 3.75\n----------------\n")),(0,t.kt)("h2",{id:"code---modell-erweitern"},"code - Modell erweitern"),(0,t.kt)("p",null,'Um ein "Kassensystem" zu implementieren, das gedanklich f\xfcr Zahlung, Vertifizierung, Rechnung drucken etc zust\xe4ndig ist schreiben wir in ein neues .php File:'),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},'class Verkaufsterminal{\n    protected static $instance = null;\n\n    private function  __construct(){\n        \n        // db-connection etc would/could go here\n    }\n\n    //object is created only if there is no instance of it, otherwise return the instance\n    public static function getInsance(){\n        if(self::$instance === null){\n            self::$instance = new Verkaufsterminal();\n        }\n        return self::$instance;\n    }\n\n    // objekt wurde verkauft und an der Kasse bezahlt\n    public static function verkaufe(KannVerkaufsraum $artikel, int $anzahl){\n        echo $artikel->getName_KlassenName()." wurde an der Kasse bezahlt und verkauft -> l\xf6sche $anzahl mal aus dem Verkaufsraum<br>";\n        $artikel->wurdeVerkauft($anzahl);\n    }\n}\n\ninterface KannVerkauftWerden{\n    public function wurdeVerkauft(int $anzahl);\n}\n')),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Dann importieren wir diesen File und erweitern unser Modell:")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-php"},'include(\'verkauf.php\');\nabstract class Lagerartikel{\n    protected $artikelID;\n    protected $name;\n    protected $menge;\n    protected $warenwert;\n\n    public function __construct(string $name){\n        $this->artikelID = rand(1,999999);\n        $this->name = $name;\n        $this->menge = 0;\n        $this->warenwert = rand(1,10);\n        if ($this->getPriceFromDB($name)) $this->warenwert =$this->getPriceFromDB($name);\n    }\n    public function einlagern(int $anzahl){\n        $this->menge += $anzahl;\n    }\n    public function auslagern(int $anzahl){\n        if ($anzahl <= $this->menge)   { $this->menge -= $anzahl; }\n    }\n    public function echoLagerwert(){\n        echo $this->name."-Warenwert : ".$this->menge * $this->warenwert ." \u20ac <br>";\n    }\n    public function getMenge(){\n        return $this->menge;\n    }\n    public function getName_KlassenName(){\n        //specifing type with instanceof:\n        $type = "Lagerartikel";\n        if     ( $this instanceof Snack)    {$type ="Snack";}\n        else if( $this instanceof Snack)    {$type ="Getraenk";}\n        //or just getting it with get_class():\n        $type = get_class($this);\n        return "->".$this->name." <- Klassenname: ".$type;\n    }\n    private function getPriceFromDB($name){\n        $fakeDB ["Snickers"]=1.00;\n        $fakeDB ["Chips"]=2.00;\n        $fakeDB ["cola"]=1.50;\n        $fakeDB ["bier"]=0.80;\n        if (!array_key_exists($name, $fakeDB)) return false;\n        return $fakeDB[$name];\n    }\n}\n\nabstract class KannVerkaufsraum \n    extends Lagerartikel \n    implements KannVerkauftWerden\n{\n    protected $mengeVerkaufsraum = 0;\n\n    public function inVerkaufsraumStellen(int $anzahl){\n        if($anzahl <= $this->menge)\n        self::auslagern($anzahl);\n        $this->mengeVerkaufsraum += $anzahl;\n    }\n    public function echoWertVerkaufsraum(){\n        echo $this->name."-VerkaufsraumsWert : ".$this->mengeVerkaufsraum * $this->warenwert ." \u20ac <br>";\n    }\n    public function wurdeVerkauft(int $anzahl){\n        if ($anzahl <= $this->mengeVerkaufsraum) { $this->mengeVerkaufsraum -= $anzahl; }\n    }\n}\n\nclass Getraenk extends KannVerkaufsraum{\n    protected $isAlkoholfrei;\n    protected $volumen="1 Liter";\n    protected $pfand=0.15;\n\n    public function __construct(string $name, bool $isAlkoholfrei){\n        parent::__construct($name);\n        $this->isAlkoholfrei = $isAlkoholfrei;\n    }\n    public function echoGesamtPfand(){\n        echo "PfandWert im Lager: ".$this->pfand*$this->menge."<br>";\n        echo "PfandWert im Verkaufsraum: ".$this->pfand*$this->mengeVerkaufsraum."<br>";\n    }\n}\n\nclass Snack extends KannVerkaufsraum{\n    protected $isSalzig;\n    protected $gewicht;\n\n    public function __construct(string $name, float $gewicht, bool $isSalzig){\n        parent::__construct($name);\n        $this->gewicht = $gewicht;\n        $this->isSalzig = $isSalzig;\n    }\n    public function echoGesamtGewicht(){\n        echo "Gesamtgewicht im Lager: ".$this->gewicht*$this->menge/1000 ." kg <br>";\n        echo "Gesamtgewicht im Verkaufsraum: ".$this->gewicht*$this->mengeVerkaufsraum/1000 ." kg <br>";\n        return $this->gewicht*$this->menge;\n    }\n}\n\n// erstellen unseres Lagers\n$lager = [];\n$lager[] = new Snack    ("Snickers",57,false);\n$lager[] = new Snack    ("Chips",200,true);\n$lager[] = new Getraenk ("cola", true);\n$lager[] = new Getraenk ("bier", false);\n$lager[] = new Getraenk ("mate", true);                 // mate nicht in fake db -> random wert.\n\n\n// bef\xfcllen unseres Lagers:\nforeach($lager as $art){\n    $art->einlagern(100);                               // 100 artikel ins Lager stellen\n    $halbeMenge = round( $art->getMenge() / 4 );\n    $art->inVerkaufsraumStellen($halbeMenge);           //ein Viertel, also 25 in Verkaufsraum stellen\n}\n\nfunction helperEchoLagerbestand($lager){\n    // ausgeben unserer Werte:\n    foreach($lager as $art){\n        echo "<h4>".$art->getName_KlassenName()."</h4>";//echo des Klassennamens\n        $art->echoLagerwert();                          //echo des Lager-Wert\n        $art->echoWertVerkaufsraum();                   //echo des Werts im Verkaufsraum\n\n        if($art instanceof Snack){\n            $art->echoGesamtGewicht();                  //echo der 2 Gewichts-Summen (Lager/Verkaufsraum) wenn Snack\n\n        }else if ($art instanceof Getraenk){\n            $art->echoGesamtPfand();                    //echo der 2 Pfand-Summen (Lager/Verkaufsraum) wenn Snack\n        }\n    }\n}\n\necho "<h2>----- Urspr\xfcnglicher Warenbestand: ------</h2>";\nhelperEchoLagerbestand($lager);\n\n// erstellen des Verkaufsterminal-Singletons:\necho "<h2>----- Verkaufen einiger Waren: ------</h2>";\n$kasse = Verkaufsterminal::getInsance();\n$kasse->verkaufe($lager[0],10);\n$kasse->verkaufe($lager[1],25);\n\nhelperEchoLagerbestand($lager);\n')),(0,t.kt)("h3",{id:"ausgabe-1"},"Ausgabe"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"----- Urspr\xfcnglicher Warenbestand: ------\n->Snickers <- Klassenname: Snack\nSnickers-Warenwert : 525 \u20ac\nSnickers-VerkaufsraumsWert : 175 \u20ac\nGesamtgewicht im Lager: 4.275 kg\nGesamtgewicht im Verkaufsraum: 1.425 kg\n\n->Chips <- Klassenname: Snack\nChips-Warenwert : 225 \u20ac\nChips-VerkaufsraumsWert : 75 \u20ac\nGesamtgewicht im Lager: 15 kg\nGesamtgewicht im Verkaufsraum: 5 kg\n\n->cola <- Klassenname: Getraenk\ncola-Warenwert : 525 \u20ac\ncola-VerkaufsraumsWert : 175 \u20ac\nPfandWert im Lager: 11.25\nPfandWert im Verkaufsraum: 3.75\n\n->bier <- Klassenname: Getraenk\nbier-Warenwert : 75 \u20ac\nbier-VerkaufsraumsWert : 25 \u20ac\nPfandWert im Lager: 11.25\nPfandWert im Verkaufsraum: 3.75\n\n----- Verkaufen einiger Waren: ------\n->Snickers <- Klassenname: Snack wurde an der Kasse bezahlt und verkauft -> l\xf6sche 10 mal aus dem Verkaufsraum\n->Chips <- Klassenname: Snack wurde an der Kasse bezahlt und verkauft -> l\xf6sche 25 mal aus dem Verkaufsraum\n\n->Snickers <- Klassenname: Snack\nSnickers-Warenwert : 525 \u20ac\nSnickers-VerkaufsraumsWert : 105 \u20ac\nGesamtgewicht im Lager: 4.275 kg\nGesamtgewicht im Verkaufsraum: 0.855 kg\n\n->Chips <- Klassenname: Snack\nChips-Warenwert : 225 \u20ac\nChips-VerkaufsraumsWert : 0 \u20ac\nGesamtgewicht im Lager: 15 kg\nGesamtgewicht im Verkaufsraum: 0 kg\n\n->cola <- Klassenname: Getraenk\ncola-Warenwert : 525 \u20ac\ncola-VerkaufsraumsWert : 175 \u20ac\nPfandWert im Lager: 11.25\nPfandWert im Verkaufsraum: 3.75\n->bier <- Klassenname: Getraenk\n\nbier-Warenwert : 75 \u20ac\nbier-VerkaufsraumsWert : 25 \u20ac\nPfandWert im Lager: 11.25\nPfandWert im Verkaufsraum: 3.75\n")))}o.isMDXComponent=!0},9838:(e,n,r)=>{r.d(n,{Z:()=>a});const a=r.p+"assets/images/LagerArtikel-d7022f4110233ca04b9f58a13833f41e.svg"}}]);