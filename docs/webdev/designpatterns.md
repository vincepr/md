# Design Patterns

with short self explanatory code examples

## Creational Patterns

```py
```

### Factory

```Python
class Burger:
    def __init__(self, ingredients):
        self.ingredients = ingredients
    def make(self):
        print(self.ingredients)

class BurgerFactory:
    def createcheeseBurger(self):
        ingredients = ["patty", "cheese", "patty"]
        return Burger(ingredients)

    def createVeganBurger(self):
        ingredients = ["patty", "lettuce", "vegan-patty"]
        return Burger(ingredients)

    def createDeluxeBurger(self):
        ingredients = ["patty", "cheese", "patty", "secret-sauce"]
        return Burger(ingredients)

BuFa = BurgerFactory()
BuFa.createCheeseBurger().make()
BuFa.createDeluxeBurger().make()
```

### Builder Patterns

```py
class Burger:
    def __init__(self):
        self.buns = None
        self.patty = None
        self.cheese = None

    def setBuns(self, bunStyle):
        self.buns = bunStyle

    def setPatty(self, pattyStyle):
        self.buns = pattyStyle

    def setCheese(self, cheeseStyle):
        self.buns = cheeseStyle

class BurgerBuilder:
    def __init__(self):
        self.burger = Burger()
    
    def addBuns(self, bunStyle):
        self.burger.setBuns(bunStyle)
        return self

    def addPatty(self, pattyStyle):
        self.burger.setPatty(pattyStyle)
        return self

    def addCheese(self, cheeseStyle):
        self.burger.setCheese(cheeseyStyle)
        return self
    
    def build(self):
        return self.burger

burger = BurgerBuilder()
            .addBuns("sesame")
            .addPatty("vegan-patty")
            .addCheese("american cheese")
            .build()
```

### Singleton
- ex shared "global space"

```py
class ApplicationState:
    instance = None

    def __init(self):
        self.isLoggedIn = False
    
    @staticmethod
    def getAppState():
        # check if there already is another Instance running:
        if not ApplicationState.instance:
            # if not we create one
            ApplicationState.instance = ApplicationState()
        # then we create the already existing/freshly created Instance
        return ApplicationState.instance

appState1 = ApplicationState.getAppState()
print(appState1.isLoggedIn) # prints False

appState2 = ApplicationState.getAppState()
appState1.isLoggedIn = True

print(appState1.isLoggedIn) # prints True
print(appState2.isLoggedIn) # prints True 
# since appState 1 and 2 both "share" the one truth of the isLoggedIn state
```

## Behavioral Patterns

### Observer
- aka Publisher & Subscriber - Pattern
- example Youtube subscriber notifications
```py
# the Publisher
class YoutubeChannel:
    def __init__(self, name):
        self.name = name
        self.subscribers = []
    
    def subscribe (self, sub):
        self.subscribers.append(sub)
    
    def notify(self, event):
        for sub in self.subscribers:
            sub.sendNotification(self.name, event)

# define the Subscriber interface:
from abc import ABC, abstractmethod
class YoutubeSubscribers(ABC):
    @abstractmethod
    def sendNotification(self, event):
        pass

# One of the Subscribers using the above interface
class YoubeUser(YoutubeSubscriber):
    def __init__(self, name):
        self.name = name
    
    def sendNotification(self, channel, event):
        print(f"User {self.name} received notification from {channel}: new {event} is available!")

# example
channel = YoutubeChannel("Cats'nDogs")

channel.subscribe(YoutubeUser("Paul#123"))
channel.subscribe(YoutubeUser("Dan#653"))
channel.subscribe(YoutubeUser("Lana#574"))

channel.notify("A new Cat-Video")
```

### Iterator
- example "linked list" or "binary search tree"

```py
class ListNode:
    def __init__(self, val):
        self.val = val
        self.next = None

class LinkedList:
    def __init__(self, head):
        self.head = head
        self.cur = None
    
    # define Iterator
    def __iter__(self):
        self.cur = self.head
        return self
    
    # Iterate to next
    def __next__(self):
        if self.cur:
            val = self.cur.val
            self.cur = self.cur.next
            return val
        else:
            raise StopIteration

# fill a list
head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)
myList = LinkedList(head)

# iterate trough said list
for n in myList:
    print(n)
```

### Strategy Pattern - Open-Closed Principle
- open for extension
- closed for modification
- ex. filter functionality
- easy to add additional functinaly (ex. filter by isPrime()  etc...)

```py
for abc import ABC, abstractmethod

class FilterStrategy(ABC):
    @abstractmethod
    def removeValue(self, val):
        pass

class RemoveNegativeStrategy(FilterStrategy):
    def removeValue(self, val):
        return val < 0

class RemoveOddStrategy(FilterStrategy):
    def removeValue(self, val):
        return abs(val)%2

class Values:
    def __init__(self, vals):
        if not strategy.removeValue(n):
            res.appen(n)
        return res

values = Values({-7, -4, -1, 0, 2, 6, 9})

print(values.filter(RemoveNegativeStrategy()))      # [ 0, 2, 6, 9]
print(values.filter(RemoveOddStrategy()))           # [-4, 0, 2, 6]
```

## Structural Patterns

### Adapter

```py
class UsbCable:
    def __init__(self):
        self.isPlugged = False
    
    def plugUsb(self):
        self.isPlugged = True

class UsbPort:
    def __init__(self):
        self.portAvailable = True
    
    def plug(self, usb):
        if self.portvailable:
            usb.plugUsb()
            self.portAvailable = False

# usbcables can plug directly only into usb ports
usbCable = UsbCable()
usbPort1 = UsbPort()
usbPort1.plug(usbCable)

class MicroUsbCable:
    def __init__(self):
        self.isPlugged = False
    
    def plugMicroUsb(self):
        self.isPlugged = True 

class MicroToUsbAdapter(UsbCable):
    def __init__(self, microUsbCable):
        self.microUsbCable = microUsbCable
        self.microUsbCable.plugMicroUsb()

# mow MicroUsb and Usb can connect via an adapter
microToUsbAdapter = MicroToUsbAdapter(MicroUsbCable())
usbPort2 = UsbPort()
usbPort2.plug(microToUsbAdapter)
```

### Facade
- wrapper class to abstract lower level details. 
- ex. API that is exposed over some http requests