"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[2856],{9874:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"typescript","metadata":{"permalink":"/md/blog/typescript","editUrl":"https://github.com/vincepr/md/blob/main/blog/2023-12-14-Typescript.mdx","source":"@site/blog/2023-12-14-Typescript.mdx","title":"Typescript","description":"Typescript examples where the Typesystem fails","date":"2023-12-14T00:00:00.000Z","formattedDate":"14. Dezember 2023","tags":[],"hasTruncateMarker":false,"authors":[{"name":"Vince","title":"The Creator","url":"https://github.com/vincepr","imageURL":"https://github.com/vincepr.png","key":"Vincent"}],"frontMatter":{"slug":"typescript","title":"Typescript","authors":["Vincent"]},"nextItem":{"title":"Aufgabe 7","permalink":"/md/blog/mdx-interactive7"}},"content":"Typescript examples where the Typesystem fails\\n- from https://www.youtube.com/watch?v=u1WmiqlrqL0\\n\\n```typescript\\nfunction shouldMutateArray(items: (number | string)[]) {\\n    items.push(\\"woops\\");\\n}\\nconst calculationOnNumbers = (items: number[]) => items.reduce((a, b) => a - b, 0)\\n\\nconst items: number[] = [1, 2, 3]; // only numbers allowed in here\\n\\nconsole.log(items); // -> [1, 2, 3]\\nconsole.log(calculationOnNumbers(items)); // -6\\n\\nshouldMutateArray(items);\\n// ! we now have a STRING in our array of NUMBERS...\\n\\nconsole.log(items); // -> [1, 2, 3, \\"woops\\"]\\nconsole.log(calculationOnNumbers(items)); // -> NAN\\n```\\n\\n   \\n```typescript\\n\\ntype ReadonlyStruct = {\\n    readonly a: number;\\n    readonly b: number;\\n}\\n\\ntype NormalStruct = {\\n    a: number;\\n    b: number;\\n}\\n\\nfunction newReadonly(): ReadonlyStruct {\\n    return {\\n        a: 1,\\n        b: 2,\\n    };\\n}\\n\\nfunction willMutateNormalStruct(item: NormalStruct) {\\n    item.a = 99;\\n    item.b = 88;\\n}\\n\\nconst item = newReadonly();\\n\\nconsole.log(item); // { a: 1, b: 2 }\\n\\n//  item.a = 1; // <- this is not allowed. Not Allowed to mutate readonly field\\n\\nwillMutateNormalStruct(item);\\n\\nconsole.log(item); // { a: 99, b: 88 }\\n\\n// ! typescript can\'t properly differentiate between the 2 Structs with same name fields\\n// !!! typescript just ignore the readonly annotation and mutation of those fields becomes possible\\n```"},{"id":"mdx-interactive7","metadata":{"permalink":"/md/blog/mdx-interactive7","editUrl":"https://github.com/vincepr/md/blob/main/blog/2023-03-06-Aufgabe7.mdx","source":"@site/blog/2023-03-06-Aufgabe7.mdx","title":"Aufgabe 7","description":"- Implementiere die mit :todo markierten funktionen","date":"2023-03-06T00:00:00.000Z","formattedDate":"6. M\xe4rz 2023","tags":[{"label":"JS-Hero","permalink":"/md/blog/tags/js-hero"}],"hasTruncateMarker":false,"authors":[{"name":"Vince","title":"The Creator","url":"https://github.com/vincepr","imageURL":"https://github.com/vincepr.png","key":"Vincent"}],"frontMatter":{"slug":"mdx-interactive7","title":"Aufgabe 7","authors":["Vincent"],"tags":["JS-Hero"]},"prevItem":{"title":"Typescript","permalink":"/md/blog/typescript"},"nextItem":{"title":"Aufgabe 6","permalink":"/md/blog/mdx-interactive6"}},"content":"- Implementiere die mit :todo markierten funktionen\\n``` js\\n/** Speichert Kundendaten - pro Kunden nur ein Datensatz*/\\nclass Kunde{\\n\\t// --Attribute--\\n\\tvorname = \\"\\";\\n\\tnachname = \\"\\";\\n\\talter = 0;\\n\\tgeschlecht = \\"\\";\\n\\t\\n\\t//Konstruktor\\n\\tconstructor(vor, nach, alt, gesch){\\n\\t        this.vorname = vor;\\n\\t        this.nachname = nach;\\n\\t        this.alter = alt;\\n\\t        this.geschlecht = gesch;\\n        }\\n        \\n        \\n\\t// --Methoden--\\n    // bei Hochzeit ect kann sich Nachname \xe4ndern\\n\\tsetNachname(neuerName){\\n\\t\\tthis.nachname = neuerName;\\n\\t}\\n\\t// Jedes Jahr unvermeidbar\\n\\thatteGeburtstag(){\\n\\t\\tthis.alter += 1;\\n\\t}\\n\\t\\n\\t// Gibt alle Kundendaten aus \\n\\tgetInfo(){\\n\\t\\tlet isVolljaehrig = false;\\n\\t\\tif (this.alter > 17){\\n            isVolljaehrig = true;\\n        }\\n        return (\\"Kunde \\"+this.vorname\\n            + \\" \\" + this.nachname\\n            + \\" ist \\" + this.alter + \\" Jahre alt, \\"\\n            + this.geschlecht + \\" und \\"\\n            + (isVolljaehrig ? \\"vollj\xe4hrig\\" : \\"minderj\xe4hrig\\")\\n            + \\". <br>\\"\\n        );\\n    }\\n}\\n```\\n\\nimport JsPlayground from \'/src/components/JS/JsPlayground.jsx\';\\nlet importPath = \'/md/jsAufgaben/ae7Test.js\';\\nlet text = `\\nclass KundenDatenbank{\\n\\talleKunden\\t\\t\\t\\t\\t// [] filled with Kunde - objects\\n\\tconstructor(){\\n\\t\\tthis.alleKunden =[];\\n\\t}\\n\\taddKunde(vor, nach, alter, gesch){\\n\\t\\tthis.alleKunden.push(new Kunde(vor, nach, alter, gesch))\\n\\t}\\n\\tremoveKunde(vor, nach){\\n\\t\\t// :todo kunde mit Vor- und Nachnamen soll aus alleKunden gel\xf6scht werden\\n\\t}\\n\\thatteGeburtstag(vor, nach){\\n\\t\\t// :todo alter des Kunden erh\xf6ht sich um ein Jahr\\n\\t}\\n\\tprintInfo(){\\n\\t\\tfor (let k of this.alleKunden){\\n\\t\\t\\tconsole.log(k.getInfo());\\n\\t\\t}\\n\\t}\\n}\\n`\\n\\n<JsPlayground importPath={importPath} defaultText={text}/>"},{"id":"mdx-interactive6","metadata":{"permalink":"/md/blog/mdx-interactive6","editUrl":"https://github.com/vincepr/md/blob/main/blog/2023-02-20-Aufgabe6.mdx","source":"@site/blog/2023-02-20-Aufgabe6.mdx","title":"Aufgabe 6","description":"Write a function called provisionsRechner, that takes in a float and adheres to the Diagramm below.","date":"2023-02-20T00:00:00.000Z","formattedDate":"20. Februar 2023","tags":[{"label":"JS-Hero","permalink":"/md/blog/tags/js-hero"}],"hasTruncateMarker":false,"authors":[{"name":"Vince","title":"The Creator","url":"https://github.com/vincepr","imageURL":"https://github.com/vincepr.png","key":"Vincent"}],"frontMatter":{"slug":"mdx-interactive6","title":"Aufgabe 6","authors":["Vincent"],"tags":["JS-Hero"]},"prevItem":{"title":"Aufgabe 7","permalink":"/md/blog/mdx-interactive7"},"nextItem":{"title":"Aufgabe 5","permalink":"/md/blog/mdx-interactive5"}},"content":"Write a function called ***provisionsRechner***, that takes in a float and adheres to the Diagramm below.\\n\\n![Struktogramm](./Aufgabe6.svg)\\n\\n\\nimport JsPlayground from \'/src/components/JS/JsPlayground.jsx\';\\nlet importPath = \'/md/jsAufgaben/ae6Test.js\';\\n\\n<JsPlayground importPath={importPath}/>"},{"id":"mdx-interactive5","metadata":{"permalink":"/md/blog/mdx-interactive5","editUrl":"https://github.com/vincepr/md/blob/main/blog/2023-02-17-Aufgabe5.mdx","source":"@site/blog/2023-02-17-Aufgabe5.mdx","title":"Aufgabe 5","description":"Experimental .js-file -> read code and autogenerate elements and answers.","date":"2023-02-17T00:00:00.000Z","formattedDate":"17. Februar 2023","tags":[{"label":"JS-Hero","permalink":"/md/blog/tags/js-hero"}],"hasTruncateMarker":false,"authors":[{"name":"Vince","title":"The Creator","url":"https://github.com/vincepr","imageURL":"https://github.com/vincepr.png","key":"Vincent"}],"frontMatter":{"slug":"mdx-interactive5","title":"Aufgabe 5","authors":["Vincent"],"tags":["JS-Hero"]},"prevItem":{"title":"Aufgabe 6","permalink":"/md/blog/mdx-interactive6"},"nextItem":{"title":"Aufgabe 4","permalink":"/md/blog/mdx-interactive4"}},"content":"Experimental .js-file -> read code and autogenerate elements and answers.\\n\\nimport FileToAnswerGame from \'/src/components/JS/FileToAnswerGame.jsx\';\\nlet importPath = \'/md/jsAufgaben/ae5-1.js\';\\nlet withHelp = false\\n\\n\\n### == und ===\\n\\n<FileToAnswerGame importPath={importPath} withHelp={withHelp}/>\\n\\n___\\n### Vergleiche, AND && und OR ||\\n\\n<FileToAnswerGame importPath={\'/md/jsAufgaben/ae5-2.js\'} withHelp={withHelp}/>\\n\\n___\\n### eine kleine Funktion\\n\\n<FileToAnswerGame importPath={\'/md/jsAufgaben/ae5-3.js\'} withHelp={withHelp}/>"},{"id":"mdx-interactive4","metadata":{"permalink":"/md/blog/mdx-interactive4","editUrl":"https://github.com/vincepr/md/blob/main/blog/2023-02-16-Aufgabe4.mdx","source":"@site/blog/2023-02-16-Aufgabe4.mdx","title":"Aufgabe 4","description":"Gesucht sind die 6 Zeilen die der ConsoleLog ausgibt. Sollten L\xf6sbar sein wenn man in Js-Hero bis ca 37. gekomen ist.","date":"2023-02-16T00:00:00.000Z","formattedDate":"16. Februar 2023","tags":[{"label":"JS-Hero","permalink":"/md/blog/tags/js-hero"}],"hasTruncateMarker":false,"authors":[{"name":"Vince","title":"The Creator","url":"https://github.com/vincepr","imageURL":"https://github.com/vincepr.png","key":"Vincent"}],"frontMatter":{"slug":"mdx-interactive4","title":"Aufgabe 4","authors":["Vincent"],"tags":["JS-Hero"]},"prevItem":{"title":"Aufgabe 5","permalink":"/md/blog/mdx-interactive5"},"nextItem":{"title":"Aufgabe 3","permalink":"/md/blog/mdx-interactive3"}},"content":"Gesucht sind die 6 Zeilen die der ConsoleLog ausgibt. Sollten L\xf6sbar sein wenn man in Js-Hero bis ca 37. gekomen ist.\\n\\n```js\\nfunction x(a){\\n  return a % 10;\\n}\\n\\nfunction y(str){\\n  return str.length;\\n}\\n\\nfunction pr(a,b){\\n  console.log(a+b+c);\\n}\\n\\n// 1 Block | strings and numbers\\nlet a = \\"hello world!\\";\\nlet b = x(a.length);\\nlet c = y(a);\\npr( a, b + c );\\npr( c, b + a );\\n\\n// 2 Block | charAt() und substr() JS-Hero 22-26\\na = \\"This_string_has_26_letters\\";\\nb = \\"This_string_has_29_characters\\";\\nc = b.charAt(23) + b.charAt(4) + b.substr(5,12) + a.charAt(16) + a.substr(19,7);\\nconsole.log(c);\\npr(c.length, \\"isTheLengthOf:\\");\\n\\n// 3 Block | Math-functions JS-Hero 32-37\\na = y(\\"12345\\") + Math.random();\\nb = Math.ceil(a) + Math.floor(a);\\nc = c.length;\\nconsole.log(b);\\npr(b,b);\\n```\\n\\n\\nimport AnswerGame from \'/src/components/JS/AnswerGame.jsx\';\\nlet arrCorrectAnswers = [ \\n    \\"hello world!1412\\",\\n    \\"122hello world!12\\", \\n    \\"a_string_has_22letters\\", \\n    \\"22isTheLengthOf:a_string_has_22letters\\", \\n    \\"11\\", \\n    \\"44\\"\\n    ]\\n\\n<AnswerGame arr={arrCorrectAnswers} withHelp={true}/>"},{"id":"mdx-interactive3","metadata":{"permalink":"/md/blog/mdx-interactive3","editUrl":"https://github.com/vincepr/md/blob/main/blog/2023-02-13-Aufgabe3.mdx","source":"@site/blog/2023-02-13-Aufgabe3.mdx","title":"Aufgabe 3","description":"Gesucht sind die 8 Zeilen die der ConsoleLog ausgibt.","date":"2023-02-13T00:00:00.000Z","formattedDate":"13. Februar 2023","tags":[{"label":"JS-Hero","permalink":"/md/blog/tags/js-hero"}],"hasTruncateMarker":false,"authors":[{"name":"Vince","title":"The Creator","url":"https://github.com/vincepr","imageURL":"https://github.com/vincepr.png","key":"Vincent"}],"frontMatter":{"slug":"mdx-interactive3","title":"Aufgabe 3","authors":["Vincent"],"tags":["JS-Hero"]},"prevItem":{"title":"Aufgabe 4","permalink":"/md/blog/mdx-interactive4"},"nextItem":{"title":"Aufgabe 2","permalink":"/md/blog/mdx-interactive2"}},"content":"Gesucht sind die 8 Zeilen die der ConsoleLog ausgibt.\\n\\n```js\\nvar x = \\"Hello\\";\\nvar y = 2;\\nvar z = 3;\\nprintOut();\\n\\nx = a();\\ny = a() + b(1);\\nz = x + a();\\nprintOut();\\n\\nx = c(1, 2);\\ny = c(x, 4);\\nz = c(z, b(y)) - 2;\\nprintOut();\\n\\nconsole.log(x + y + z + \\"\\");\\nconsole.log(\\"\\" + x + y + z);\\n\\nfunction a() {\\n  let a = 1;\\n  a = a + 1;\\n  a += 3;\\n  return a;\\n}\\n\\nfunction b(base){\\n  return base * base;\\n}\\n\\nfunction c(a, b){\\n  return x + a + b;\\n}\\n\\nfunction printOut(){\\n  console.log(x + y + z);\\n  console.log(\\"Ergebnis:_\\" + x + y+ z);\\n}\\n```\\n\\n\\nimport AnswerGame from \'/src/components/JS/AnswerGame.jsx\';\\nlet arrCorrectAnswers = [\\n  \\"Hello23\\",\\n  \\"Ergebnis:_Hello23\\",\\n  \\"21\\",\\n  \\"Ergebnis:_5610\\",\\n  \\"444\\",\\n  \\"Ergebnis:_820416\\",\\n  \\"444\\",\\n  \\"820416\\",\\n    ]\\n\\n<AnswerGame arr={arrCorrectAnswers} withHelp={true}/>"},{"id":"mdx-interactive2","metadata":{"permalink":"/md/blog/mdx-interactive2","editUrl":"https://github.com/vincepr/md/blob/main/blog/2023-02-12-Aufgabe2.mdx","source":"@site/blog/2023-02-12-Aufgabe2.mdx","title":"Aufgabe 2","description":"Gesucht sind die 2 Zeilen die der ConsoleLog ausgibt.","date":"2023-02-12T00:00:00.000Z","formattedDate":"12. Februar 2023","tags":[{"label":"JS-Hero","permalink":"/md/blog/tags/js-hero"}],"hasTruncateMarker":false,"authors":[{"name":"Vince","title":"The Creator","url":"https://github.com/vincepr","imageURL":"https://github.com/vincepr.png","key":"Vincent"}],"frontMatter":{"slug":"mdx-interactive2","title":"Aufgabe 2","authors":["Vincent"],"tags":["JS-Hero"]},"prevItem":{"title":"Aufgabe 3","permalink":"/md/blog/mdx-interactive3"},"nextItem":{"title":"Aufgabe 1","permalink":"/md/blog/mdx-interactive1"}},"content":"Gesucht sind die 2 Zeilen die der ConsoleLog ausgibt.\\n\\n```js\\nlet var1 = 3;\\nlet var2 = addiere(3, 2);\\nlet var3 = 31;\\nvar3 = multipliziere(var1, 1);\\nlet var4 = hoch2(5);\\nlet var5 = hoch3(5, 10, 15);\\nvar1 = addiere(var2, 5);\\nconsole.log(var1 + \\" \\" + var2 + \\" \\" + var3+ \\" \\"  + var4 + \\" \\" + var5);\\nconsole.log(var1 + var2 + \\" \\" + var3 + var4 + \\" \\" + var5);\\n\\n\\nfunction addiere(x, y){\\n  let z = x + y + 1;\\n  return x + y;\\n}\\n\\nfunction multipliziere(a, b){\\n  let x = a;\\n  return x*a;\\n}\\n\\nfunction hoch2(num){\\n  return num*num;\\n}\\n\\nfunction hoch3(num1, num2, num3){\\n  return num1 * num2 * num1;\\n}\\n```\\n\\n\\n\\nimport AnswerGame from \'/src/components/JS/AnswerGame.jsx\';\\nlet arrCorrectAnswers = [\\n    \\"10 5 9 25 250\\",\\n    \\"15 925 250\\",\\n    ];\\n\\n<AnswerGame arr={arrCorrectAnswers} withHelp={true}/>"},{"id":"mdx-interactive1","metadata":{"permalink":"/md/blog/mdx-interactive1","editUrl":"https://github.com/vincepr/md/blob/main/blog/2023-02-11-Aufgabe1.mdx","source":"@site/blog/2023-02-11-Aufgabe1.mdx","title":"Aufgabe 1","description":"Gesucht sind die 4 Zeilen die der ConsoleLog ausgibt.","date":"2023-02-11T00:00:00.000Z","formattedDate":"11. Februar 2023","tags":[{"label":"JS-Hero","permalink":"/md/blog/tags/js-hero"}],"hasTruncateMarker":false,"authors":[{"name":"Vince","title":"The Creator","url":"https://github.com/vincepr","imageURL":"https://github.com/vincepr.png","key":"Vincent"}],"frontMatter":{"slug":"mdx-interactive1","title":"Aufgabe 1","authors":["Vincent"],"tags":["JS-Hero"]},"prevItem":{"title":"Aufgabe 2","permalink":"/md/blog/mdx-interactive2"},"nextItem":{"title":"Playground","permalink":"/md/blog/mdx-playground"}},"content":"Gesucht sind die 4 Zeilen die der ConsoleLog ausgibt.\\n\\n```js\\nlet aNumber;\\nlet anotherNumber;\\n\\nfunction changeNumber(number){\\n  aNumber = number;\\n  console.log(number);\\n  return anotherNumber;\\n}\\n\\nfunction whatDoesThisDo(xyz){\\n  console.log(xyz - 100);\\n  return aNumber + 1;\\n  console.log(xyz + aNumber);\\n}\\n\\nanotherNumber = 22;\\nchangeNumber(10);\\nchangeNumber(anotherNumber);\\nwhatDoesThisDo(100);\\nanotherNumber = whatDoesThisDo(aNumber);\\n\\n```\\n\\n\\nimport AnswerGame from \'/src/components/JS/AnswerGame.jsx\';\\nlet arrCorrectAnswers = [\\n    \\"10\\", \\n    \\"22\\", \\n    \\"0\\", \\n    \\"-78\\", \\n    ]\\n\\n<AnswerGame arr={arrCorrectAnswers} withHelp={true}/>"},{"id":"mdx-playground","metadata":{"permalink":"/md/blog/mdx-playground","editUrl":"https://github.com/vincepr/md/blob/main/blog/2023-02-10-Playground.mdx","source":"@site/blog/2023-02-10-Playground.mdx","title":"Playground","description":"","date":"2023-02-10T00:00:00.000Z","formattedDate":"10. Februar 2023","tags":[{"label":"JS-Hero","permalink":"/md/blog/tags/js-hero"}],"hasTruncateMarker":false,"authors":[{"name":"Vince","title":"The Creator","url":"https://github.com/vincepr","imageURL":"https://github.com/vincepr.png","key":"Vincent"}],"frontMatter":{"slug":"mdx-playground","title":"Playground","authors":["Vincent"],"tags":["JS-Hero"]},"prevItem":{"title":"Aufgabe 1","permalink":"/md/blog/mdx-interactive1"},"nextItem":{"title":"AboutDocusaurusBlog","permalink":"/md/blog/welcome"}},"content":"import JsPlayground from \'/src/components/JS/JsPlayground.jsx\';\\n\\n<JsPlayground/>"},{"id":"welcome","metadata":{"permalink":"/md/blog/welcome","editUrl":"https://github.com/vincepr/md/blob/main/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"AboutDocusaurusBlog","description":"Default-Info about Docusaurus blog","date":"2021-08-26T00:00:00.000Z","formattedDate":"26. August 2021","tags":[{"label":"hello","permalink":"/md/blog/tags/hello"},{"label":"docusaurus","permalink":"/md/blog/tags/docusaurus"}],"hasTruncateMarker":false,"authors":[{"name":"Vince","title":"The Creator","url":"https://github.com/vincepr","imageURL":"https://github.com/vincepr.png","key":"Vincent"}],"frontMatter":{"slug":"welcome","title":"AboutDocusaurusBlog","authors":["Vincent"],"tags":["hello","docusaurus"]},"prevItem":{"title":"Playground","permalink":"/md/blog/mdx-playground"}},"content":"## Default-Info about Docusaurus blog\\n\\n[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."}]}')}}]);