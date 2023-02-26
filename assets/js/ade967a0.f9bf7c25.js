"use strict";(self.webpackChunkmd=self.webpackChunkmd||[]).push([[5098],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,b=d["".concat(o,".").concat(f)]||d[f]||p[f]||s;return n?a.createElement(b,l(l({ref:t},c),{},{components:n})):a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=f;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<s;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const s={},l="Design Patterns",i={unversionedId:"webdev/designpatterns",id:"webdev/designpatterns",title:"Design Patterns",description:"- with short self explanatory code examples",source:"@site/docs/webdev/designpatterns.md",sourceDirName:"webdev",slug:"/webdev/designpatterns",permalink:"/md/webdev/designpatterns",draft:!1,editUrl:"https://github.com/vincepr/md/blob/main/docs/webdev/designpatterns.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"webdev",permalink:"/md/category/webdev"},next:{title:"Express JS",permalink:"/md/webdev/expressjs"}},o={},u=[{value:"Creational Patterns",id:"creational-patterns",level:2},{value:"Factory",id:"factory",level:3},{value:"Builder Patterns",id:"builder-patterns",level:3},{value:"Singleton",id:"singleton",level:3},{value:"Behavioral Patterns",id:"behavioral-patterns",level:2},{value:"Observer",id:"observer",level:3},{value:"Iterator",id:"iterator",level:3},{value:"Strategy Pattern - Open-Closed Principle",id:"strategy-pattern---open-closed-principle",level:3},{value:"Structural Patterns",id:"structural-patterns",level:2},{value:"Adapter",id:"adapter",level:3},{value:"Facade",id:"facade",level:3}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"design-patterns"},"Design Patterns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"with short self explanatory code examples"),(0,r.kt)("li",{parentName:"ul"},"alternative for golang examples see here : ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tmrts/go-patterns"},"https://github.com/tmrts/go-patterns"))),(0,r.kt)("h2",{id:"creational-patterns"},"Creational Patterns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Concern the process of object creation")),(0,r.kt)("h3",{id:"factory"},"Factory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'class Burger:\n    def __init__(self, ingredients):\n        self.ingredients = ingredients\n    def make(self):\n        print(self.ingredients)\n\nclass BurgerFactory:\n    def createcheeseBurger(self):\n        ingredients = ["patty", "cheese", "patty"]\n        return Burger(ingredients)\n\n    def createVeganBurger(self):\n        ingredients = ["patty", "lettuce", "vegan-patty"]\n        return Burger(ingredients)\n\n    def createDeluxeBurger(self):\n        ingredients = ["patty", "cheese", "patty", "secret-sauce"]\n        return Burger(ingredients)\n\nBuFa = BurgerFactory()\nBuFa.createCheeseBurger().make()\nBuFa.createDeluxeBurger().make()\n')),(0,r.kt)("h3",{id:"builder-patterns"},"Builder Patterns"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'class Burger:\n    def __init__(self):\n        self.buns = None\n        self.patty = None\n        self.cheese = None\n\n    def setBuns(self, bunStyle):\n        self.buns = bunStyle\n\n    def setPatty(self, pattyStyle):\n        self.buns = pattyStyle\n\n    def setCheese(self, cheeseStyle):\n        self.buns = cheeseStyle\n\nclass BurgerBuilder:\n    def __init__(self):\n        self.burger = Burger()\n    \n    def addBuns(self, bunStyle):\n        self.burger.setBuns(bunStyle)\n        return self\n\n    def addPatty(self, pattyStyle):\n        self.burger.setPatty(pattyStyle)\n        return self\n\n    def addCheese(self, cheeseStyle):\n        self.burger.setCheese(cheeseyStyle)\n        return self\n    \n    def build(self):\n        return self.burger\n\nburger = BurgerBuilder()\n            .addBuns("sesame")\n            .addPatty("vegan-patty")\n            .addCheese("american cheese")\n            .build()\n')),(0,r.kt)("h3",{id:"singleton"},"Singleton"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'ex shared "global space"'),(0,r.kt)("li",{parentName:"ul"},"or how one could implement shared mutable state like react ",(0,r.kt)("inlineCode",{parentName:"li"},"[count, setCount] = useState(0)")," behind the scenes")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'class ApplicationState:\n    instance = None\n\n    def __init(self):\n        self.isLoggedIn = False\n    \n    @staticmethod\n    def getAppState():\n        # check if there already is another Instance running:\n        if not ApplicationState.instance:\n            # if not we create one\n            ApplicationState.instance = ApplicationState()\n        # then we create the already existing/freshly created Instance\n        return ApplicationState.instance\n\nappState1 = ApplicationState.getAppState()\nprint(appState1.isLoggedIn) # prints False\n\nappState2 = ApplicationState.getAppState()\nappState1.isLoggedIn = True\n\nprint(appState1.isLoggedIn) # prints True\nprint(appState2.isLoggedIn) # prints True \n# since appState 1 and 2 both "share" the one truth of the isLoggedIn state\n')),(0,r.kt)("h2",{id:"behavioral-patterns"},"Behavioral Patterns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Characterize the ways in which classes or objects interact and distribute responsibility.")),(0,r.kt)("h3",{id:"observer"},"Observer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"aka Publisher & Subscriber - Pattern"),(0,r.kt)("li",{parentName:"ul"},"example Youtube subscriber notifications")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'# the Publisher\nclass YoutubeChannel:\n    def __init__(self, name):\n        self.name = name\n        self.subscribers = []\n    \n    def subscribe (self, sub):\n        self.subscribers.append(sub)\n    \n    def notify(self, event):\n        for sub in self.subscribers:\n            sub.sendNotification(self.name, event)\n\n# define the Subscriber interface:\nfrom abc import ABC, abstractmethod\nclass YoutubeSubscribers(ABC):\n    @abstractmethod\n    def sendNotification(self, event):\n        pass\n\n# One of the Subscribers using the above interface\nclass YoubeUser(YoutubeSubscriber):\n    def __init__(self, name):\n        self.name = name\n    \n    def sendNotification(self, channel, event):\n        print(f"User {self.name} received notification from {channel}: new {event} is available!")\n\n# example\nchannel = YoutubeChannel("Cats\'nDogs")\n\nchannel.subscribe(YoutubeUser("Paul#123"))\nchannel.subscribe(YoutubeUser("Dan#653"))\nchannel.subscribe(YoutubeUser("Lana#574"))\n\nchannel.notify("A new Cat-Video")\n')),(0,r.kt)("h3",{id:"iterator"},"Iterator"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'example "linked list" or "binary search tree"')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"class ListNode:\n    def __init__(self, val):\n        self.val = val\n        self.next = None\n\nclass LinkedList:\n    def __init__(self, head):\n        self.head = head\n        self.cur = None\n    \n    # define Iterator\n    def __iter__(self):\n        self.cur = self.head\n        return self\n    \n    # Iterate to next\n    def __next__(self):\n        if self.cur:\n            val = self.cur.val\n            self.cur = self.cur.next\n            return val\n        else:\n            raise StopIteration\n\n# fill a list\nhead = ListNode(1)\nhead.next = ListNode(2)\nhead.next.next = ListNode(3)\nmyList = LinkedList(head)\n\n# iterate trough said list\nfor n in myList:\n    print(n)\n")),(0,r.kt)("h3",{id:"strategy-pattern---open-closed-principle"},"Strategy Pattern - Open-Closed Principle"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Basically all it says make the "thing" an abstractmehod or interface. And do the Logic below/trough that interface.'),(0,r.kt)("li",{parentName:"ul"},"open for extension & closed for modification"),(0,r.kt)("li",{parentName:"ul"},"ex. filter functionality. Easy to add additional functinaly (ex. filter by isPrime() or by isSmallerAbs100()  etc...)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"for abc import ABC, abstractmethod\n\nclass FilterStrategy(ABC):\n    @abstractmethod\n    def removeValue(self, val):\n        pass\n\nclass RemoveNegativeStrategy(FilterStrategy):\n    def removeValue(self, val):\n        return val < 0\n\nclass RemoveOddStrategy(FilterStrategy):\n    def removeValue(self, val):\n        return abs(val)%2\n\nclass Values:\n    def __init__(self, vals):\n        if not strategy.removeValue(n):\n            res.appen(n)\n        return res\n\nvalues = Values({-7, -4, -1, 0, 2, 6, 9})\n\nprint(values.filter(RemoveNegativeStrategy()))      # [ 0, 2, 6, 9]\nprint(values.filter(RemoveOddStrategy()))           # [-4, 0, 2, 6]\n")),(0,r.kt)("h2",{id:"structural-patterns"},"Structural Patterns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Deal with the composition of objects or classes.")),(0,r.kt)("h3",{id:"adapter"},"Adapter"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"class UsbCable:\n    def __init__(self):\n        self.isPlugged = False\n    \n    def plugUsb(self):\n        self.isPlugged = True\n\nclass UsbPort:\n    def __init__(self):\n        self.portAvailable = True\n    \n    def plug(self, usb):\n        if self.portvailable:\n            usb.plugUsb()\n            self.portAvailable = False\n\n# usbcables can plug directly only into usb ports\nusbCable = UsbCable()\nusbPort1 = UsbPort()\nusbPort1.plug(usbCable)\n\nclass MicroUsbCable:\n    def __init__(self):\n        self.isPlugged = False\n    \n    def plugMicroUsb(self):\n        self.isPlugged = True \n\nclass MicroToUsbAdapter(UsbCable):\n    def __init__(self, microUsbCable):\n        self.microUsbCable = microUsbCable\n        self.microUsbCable.plugMicroUsb()\n    # could override Usb.Cble.plugUsb() if needed, but not needed in this case\n\n# mow MicroUsb and Usb can connect via an adapter\nmicroToUsbAdapter = MicroToUsbAdapter(MicroUsbCable())\nusbPort2 = UsbPort()\nusbPort2.plug(microToUsbAdapter)\n")),(0,r.kt)("h3",{id:"facade"},"Facade"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"wrapper class to abstract lower level details away from the user. "),(0,r.kt)("li",{parentName:"ul"},"ex. API that is exposed over some http requests",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the SQL and whatever else is hidden behind those simple API calls.")))))}d.isMDXComponent=!0}}]);