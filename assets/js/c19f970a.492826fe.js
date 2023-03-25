"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[9832],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(t),p=o,g=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return t?r.createElement(g,a(a({ref:n},u),{},{components:t})):r.createElement(g,a({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4509:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const i={},a="Auth using Json-Web-Token",s={unversionedId:"go/03auth",id:"go/03auth",title:"Auth using Json-Web-Token",description:"JSON-Web-Token",source:"@site/docs/go/03auth.md",sourceDirName:"go",slug:"/go/03auth",permalink:"/md/go/03auth",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/go/03auth.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Exercises",permalink:"/md/go/02exercises"},next:{title:"Context in golang",permalink:"/md/go/03examples/context"}},l={},c=[{value:"JSON-Web-Token",id:"json-web-token",level:2},{value:"Golang package",id:"golang-package",level:2},{value:"Minimal JWT-example:",id:"minimal-jwt-example",level:2}],u={toc:c};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"auth-using-json-web-token"},"Auth using Json-Web-Token"),(0,o.kt)("h2",{id:"json-web-token"},"JSON-Web-Token"),(0,o.kt)("p",null,"Jason-Web-Token-standard - ",(0,o.kt)("a",{parentName:"p",href:"https://jwt.io/introduction"},"https://jwt.io/introduction")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"After ",(0,o.kt)("strong",{parentName:"li"},"Authentication")," (ex login) we have verified our user. Now we can pass him a Token, with a expiration time,  his identifiers and maybe his access rights or allowed usage."),(0,o.kt)("li",{parentName:"ol"},"He can then use that Token for this session. Maybe store it in his cookies if on a browser. "),(0,o.kt)("li",{parentName:"ol"},"And pass it with his requests so we can use that information for ",(0,o.kt)("strong",{parentName:"li"},"authorization"),", ex making sure use Paul can edit Pauls-Contact info, but not Dorians.")),(0,o.kt)("h2",{id:"golang-package"},"Golang package"),(0,o.kt)("p",null,"jwt package for golang ",(0,o.kt)("inlineCode",{parentName:"p"},"go get -u github.com/golang-jwt/jwt/v5")),(0,o.kt)("h2",{id:"minimal-jwt-example"},"Minimal JWT-example:"),(0,o.kt)("p",null,"for a bigger example, with db and login, and using the below as middleware check out: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/vincepr/gobank"},"https://github.com/vincepr/gobank")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "os"\n    "time"\n    "github.com/golang-jwt/jwt/v5"\n)\n\n\nfunc main(){\n    // create token for user, for example when login in\n    token, err := createJWTToken("accountId-12345", true)\n    if err != nil{\n        fmt.Print("token creation failed")\n    }\n    fmt.Printf("token is: \\n%v\\n\\n",token)\n\n    // now user sends his token with a new request and we validate it:\n    claims, err := validateJWTClaims(token)\n    if err != nil{\n        fmt.Println("Good idea to have generic Error msg here like - ACCESS DENIED", err)\n    }\n\n    // now we can use this to check if his token supports his request\n    fmt.Printf("user-token says he is:%v, and isAdmin: %v, IsuerofToken was: %v \\n", claims.Id, claims.IsAdmin, claims.RegisteredClaims.Issuer)\n}\n\n\n\n// Claims from a Token, stores who the user is, what he can access and or and for how long \ntype JWTClaims struct {\n    Id string `json:"accountId"`\n    IsAdmin bool `json:"isAdmin"`\n    jwt.RegisteredClaims\n}\n\nfunc NewJWTClaims(accountId string, isAdmin  bool) JWTClaims{\n    return JWTClaims{\n        Id: accountId,\n        IsAdmin: isAdmin,\n        RegisteredClaims: jwt.RegisteredClaims{\n            ExpiresAt: jwt.NewNumericDate(time.Now().Add(18 * time.Hour)),\n            IssuedAt:  jwt.NewNumericDate(time.Now()),\n            NotBefore: jwt.NewNumericDate(time.Now()),\n            Issuer:    "go-Auth",\n            //Subject:   "somebody",\n            //ID:        "1",\n            //Audience:  []string{"somebody_else"},\n        },\n    }\n}\n\n// creates a Token to pass to our Users after ex. Login\nfunc createJWTToken(accountId string, isAdmin bool) (string, error){\n    mySigningKey := keyFromEnvForJWT()\n    claims := NewJWTClaims(accountId, isAdmin)\n    token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)\n    return token.SignedString(mySigningKey)\n}\n\n// validation happens here, returns our claims\nfunc validateJWTClaims(tokenString string) (*JWTClaims, error){\n    mySigningKey := keyFromEnvForJWT()\n    token, err := jwt.ParseWithClaims(tokenString, &JWTClaims{}, func(token *jwt.Token) (interface{}, error) {\n        if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {    // Validate the encrypt-Algorythm is the one what we expect \n            return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])\n        }\n        return []byte(mySigningKey), nil\n    })\n    if claims, ok := token.Claims.(*JWTClaims); ok && token.Valid {\n        return claims, nil\n    } else {\n        return nil, err\n    }\n}\n\n// read the Secret-Key we use for encryption from env.\nfunc keyFromEnvForJWT() []byte{\n    key := os.Getenv("JWT_KEY")\n    if key == "" {\n        key = "DefaultSecretGoesBrrr"\n        fmt.Println("Remainder - Dont forget to set your key, example $ export JWT_KEY=bhJas5_Sk-7El3VuCx7QerFuFS.Ns7bKBiJ_4O3deoZw")\n    }\n    return []byte(key)\n}\n')))}m.isMDXComponent=!0}}]);