"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[4802],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,d=u["".concat(c,".").concat(h)]||u[h]||s[h]||o;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="Syncronizing read/write - mutex in a Game example",l={unversionedId:"go/03examples/game",id:"go/03examples/game",title:"Syncronizing read/write - mutex in a Game example",description:"faulty code",source:"@site/docs/go/03examples/game.md",sourceDirName:"go/03examples",slug:"/go/03examples/game",permalink:"/md/go/03examples/game",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/go/03examples/game.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Exercises",permalink:"/md/go/02exercises"},next:{title:"Timeout - Context package",permalink:"/md/go/03examples/timeoutFetch"}},c={},p=[{value:"faulty code",id:"faulty-code",level:3},{value:"fixed code",id:"fixed-code",level:3},{value:"some refactoring",id:"some-refactoring",level:3},{value:"atomic-values another solution to the problem:",id:"atomic-values-another-solution-to-the-problem",level:3}],m={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"syncronizing-readwrite---mutex-in-a-game-example"},"Syncronizing read/write - mutex in a Game example"),(0,a.kt)("h3",{id:"faulty-code"},"faulty code"),(0,a.kt)("p",null,'Given the following short "game":'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "time"\n    "math/rand"\n)\n\ntype Player struct{\n    health int\n}\n\nfunc NewPlayer() *Player{\n    return &Player{health:100}\n}\n\nfunc startUiLoop(p *Player){\n    ticker := time.NewTicker(time.Second)\n    for{\n        fmt.Printf("player health: %d\\r", p.health) \n        <-ticker.C\n    }\n}\n\nfunc StartGameLoop(p *Player){\n    ticker := time.NewTicker(tprocessime.Millisecond*300)\n    for{\n        \n        if p.health <= 0{\n            fmt.Println("Game Over, health = 0")\n            break\n        }\n        <-ticker.C\n    }\n}\n\nfunc main(){\n    player := NewPlayer()\n    go startUiLoop(player)\n    StartGameLoop(player)\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"if we run ",(0,a.kt)("inlineCode",{parentName:"li"},"go test")," with the following everything seems fine")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\nimport "testing"\n\nfunc TestGame(t *testing.T){\n    player := NewPlayer()\n    go startUiLoop(player)\n    StartGameLoop(player)\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"but actually there is a race condition we can expose with:"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"go test --race")," the inbuild golang race-detection."),(0,a.kt)("li",{parentName:"ul"},"in the above code it could have been, that the player was already on other values but the ui was displaying wrong values without any clear indication.")),(0,a.kt)("h3",{id:"fixed-code"},"fixed code"),(0,a.kt)("p",null,"After we change the following, we remove the possible race condition:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'\ntype Player struct{\n    health int\n    mu sync.RWMutex     //RW-Read-Write Mutex more optimized than the Mutex that just locks everything\n}\n\nfunc startUiLoop(p *Player){\n    ticker := time.NewTicker(time.Second)\n    for{\n        // reading only. from the "state" -> so read-lock it for the process\n        p.mu.RLock()\n        fmt.Printf("player health: %d\\r", p.health) \n        p.mu.RUnlock()\n\n        <-ticker.C\n    }\n}\n\nfunc StartGameLoop(p *Player){\n    ticker := time.NewTicker(time.Millisecond*300)\n    for{\n        p.mu.Lock()                 // NOTICE Lock != RLock()\n        p.health -= rand.Intn(20)   // adjusting the "state" here\n        if p.health <= 0{           // reading from the state here\n            fmt.Println("Game Over, health = 0")\n            break\n        }\n        p.mu.Unlock()\n\n        <-ticker.C\n    }\n}\n')),(0,a.kt)("h3",{id:"some-refactoring"},"some refactoring"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// introducing the getter-Setter functions we can abstract away responsibilites:\nfunc (p *Player) getHealth() int {\n    p.mu.RLock()\n    defer p.mu.RUnlock()\n    return p.health\n}\n\nfunc (p *Player) changeHealth(change int) {\n    p.mu.Lock()\n    defer p.mu.Unlock()\n    p.health += change\n}\n\n// now the concern of the loops is clearer and easier to read:\nfunc startUiLoop(p *Player) {\n    ticker := time.NewTicker(time.Second)\n    for {\n        fmt.Printf("player health: %d\\r", p.getHealth())\n        <-ticker.C\n    }\n}\n\nfunc StartGameLoop(p *Player) {\n    ticker := time.NewTicker(time.Millisecond * 300)\n    for {\n        p.changeHealth(-1 * rand.Intn(20))\n        if p.getHealth() <= 0 {\n            fmt.Println("Game Over, health = 0")\n            break\n        }\n        <-ticker.C\n    }\n}\n')),(0,a.kt)("h3",{id:"atomic-values-another-solution-to-the-problem"},"atomic-values another solution to the problem:"),(0,a.kt)("p",null,"There can only happen one atomic Process at a time."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"so this is another way to avoid a race condition by reading/writing at the same time")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"pros: less overhead and complexity, or setup required compared to a mutex"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type Player struct {\n    health int32\n}\n\nfunc (p *Player) getHealth() int {\n    return int(atomic.LoadInt32(&p.health))\n}\n\nfunc (p *Player) changeHealth(change int) {\n    health := p.getHealth()\n    atomic.StoreInt32(&p.health, int32(health+change))\n}\n")))}u.isMDXComponent=!0}}]);