"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[3581],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),l=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(o.Provider,{value:n},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=l(t),d=a,m=h["".concat(o,".").concat(d)]||h[d]||u[d]||i;return t?r.createElement(m,s(s({ref:n},p),{},{components:t})):r.createElement(m,s({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=d;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c[h]="string"==typeof e?e:a,s[1]=c;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3452:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const i={},s="Pattern Matching in Csharp",c={unversionedId:"csharp/examples/PatternMatching",id:"csharp/examples/PatternMatching",title:"Pattern Matching in Csharp",description:"Just some Examples to show the syntax",source:"@site/docs/csharp/examples/PatternMatching.md",sourceDirName:"csharp/examples",slug:"/csharp/examples/PatternMatching",permalink:"/md/csharp/examples/PatternMatching",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/csharp/examples/PatternMatching.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"part 9 - gRPC",permalink:"/md/csharp/examples/Microservices/part9-gRPC"},next:{title:"Yield in csharp",permalink:"/md/csharp/examples/Yield"}},o={},l=[],p={toc:l};function h(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pattern-matching-in-csharp"},"Pattern Matching in Csharp"),(0,a.kt)("p",null,"Just some Examples to show the syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\nnamespace tutorials.PatternMatching;\n\npublic static class Example{\n    public static void Run(){\n        var circle = new Circle(5);\n        var rect = new Rectangle(420, 123);\n        var square = new Rectangle(55, 55);\n\n        var shapes = new List<Shape> {circle, rect, square};\n\n        var rngShape = shapes[new Random().Next(shapes.Count)];\n\n        // the legacy way to cast\n        if (rngShape is Circle){\n            var cir = (Circle)rngShape;      // hard cast (can trhow)\n            var cir2 = rngShape as Circle;   // safe cast\n            Console.WriteLine($"Circle with Diameter: {cir.Diameter}");\n        }\n        // or precast in the if statement (let if ish)\n        if (rngShape is Rectangle re) \n            Console.WriteLine(re.Height + re.Width);\n        \n        switch (rngShape){\n            case Circle c:\n                Console.WriteLine("This is a cicle with radius = " + c.Radius);\n                break;\n            // we can even use the when keyword that already uses the casted r.\n            case Rectangle r when r.Height == r.Width:\n                Console.WriteLine("This is a square with A = " + r.Width);\n                break;\n        }\n\n        /*      Csharp 8 and ondward    */\n\n        // pattern matching in if statement\n        if (rngShape is Circle {Radius : 10, Diameter : 20}) \n            Console.WriteLine("");\n\n        // switch expression:\n        var shapeDetails = rngShape switch {\n            Circle c => "This is a circle"+ c.Area,\n            Rectangle sq when sq.Height == sq.Width => "This is a square",\n            {Area: 100} => "This area was 100",\n            _ => "Not implemented Shape."\n        };\n\n        /*      Csharp 9 and ondward    */\n        if (rngShape is not Circle {Area: < 100 and >=20}){ }\n\n        shapeDetails = rngShape switch {\n            Circle {Area: >100 and < 200} => "Perfect circle",\n            _ => "Not implemented Shape."\n        };\n\n        shapeDetails = rngShape.Area switch{\n            >= 123 and < 1000 => "matching against the double itself",\n            _ => null,\n        };\n\n        // Syntax for nested Objects:\n        if (rngShape is ShapeWithShape {Nested: {Area: > 100}}) \n            Console.WriteLine("");\n\n        /*      Csharp 9 and ondward    */ \n        // simplyfing access in nested situations:\n        if (rngShape is ShapeWithShape {Nested.Area: > 100}) \n            Console.WriteLine("");\n    }\n\n    \n    // Example functions using Pattern Matching:\n    public static bool IsAlphaNumeric(this char c) =>\n        c is >= \'a\' and <= \'z\' or >= \'A\' and <= \'Z\';\n    \n    // Works on Touples just fine:\n    public static decimal GetGroupPriceDiscout(int groupSize, DateTime date)\n        => (groupSize, date.DayOfWeek) switch\n    {\n        (<= 0, _) => throw new ArgumentException("Error: groupSize must be positive."),\n        (_, DayOfWeek.Saturday or DayOfWeek.Sunday) => 0.0m,\n        (>=5, not DayOfWeek.Monday) => 1.0m,\n        (>=10 and <20,_) => 2.0m,\n        (>20,_) => 3.0m,\n        _ => 0.0m,\n    };\n}\n\npublic abstract class Shape{\n    public abstract double Area { get; }\n}\npublic class Rectangle : Shape, ISquare{\n    public double Height {get; set;}\n    public double Width {get; set;}\n    public Rectangle(double h, double w){\n        Height = h;\n        Width = w;\n    }\n    public override double Area => Height * Width;\n}\npublic class Circle : Shape{\n    private const double PI = Math.PI;\n    public double Diameter {get; set;}\n    public double Radius => Diameter/2;\n    public Circle(double d){\n        Diameter = d;\n    }\n    public override double Area => Diameter * PI;\n}\npublic interface ISquare{\n    double Height {get; set;}\n    double Width {get; set;}\n}\n// just to show the syntax for nested objects:\npublic class ShapeWithShape : Shape{\n    public override double Area => 123;\n    public Shape Nested {get; set;}\n    public ShapeWithShape(){\n        this.Nested = new Rectangle(1,2);\n    }\n\n}\n')))}h.isMDXComponent=!0}}]);