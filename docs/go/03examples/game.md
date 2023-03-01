# Syncronizing read/write - mutex in a Game example 

### faulty code
Given the following short "game":
```go
package main

import (
	"fmt"
	"time"
	"math/rand"
)

type Player struct{
    health int
}

func NewPlayer() *Player{
	return &Player{health:100}
}

func startUiLoop(p *Player){
	ticker := time.NewTicker(time.Second)
	for{
		fmt.Printf("player health: %d\r", p.health) 
		<-ticker.C
	}
}

func StartGameLoop(p *Player){
	ticker := time.NewTicker(tprocessime.Millisecond*300)
	for{
        
		if p.health <= 0{
			fmt.Println("Game Over, health = 0")
			break
		}
		<-ticker.C
	}
}

func main(){
	player := NewPlayer()
	go startUiLoop(player)
	StartGameLoop(player)
}
```
- if we run `go test` with the following everything seems fine
```go
package main
import "testing"

func TestGame(t *testing.T){
	player := NewPlayer()
	go startUiLoop(player)
	StartGameLoop(player)
}
```
- but actually there is a race condition we can expose with:
- `go test --race` the inbuild golang race-detection.
- in the above code it could have been, that the player was already on other values but the ui was displaying wrong values without any clear indication.

### fixed code
After we change the following, we remove the possible race condition:
```go

type Player struct{
	health int
	mu sync.RWMutex		//RW-Read-Write Mutex more optimized than the Mutex that just locks everything
}

func startUiLoop(p *Player){
	ticker := time.NewTicker(time.Second)
	for{
		// reading only. from the "state" -> so read-lock it for the process
		p.mu.RLock()
		fmt.Printf("player health: %d\r", p.health) 
		p.mu.RUnlock()

		<-ticker.C
	}
}

func StartGameLoop(p *Player){
	ticker := time.NewTicker(time.Millisecond*300)
	for{
		p.mu.Lock()                 // NOTICE Lock != RLock()
		p.health -= rand.Intn(20)   // adjusting the "state" here
		if p.health <= 0{           // reading from the state here
			fmt.Println("Game Over, health = 0")
			break
		}
		p.mu.Unlock()

		<-ticker.C
	}
}
```

### some refactoring
```go
// introducing the getter-Setter functions we can abstract away responsibilites:
func (p *Player) getHealth() int {
	p.mu.RLock()
	defer p.mu.RUnlock()
	return p.health
}

func (p *Player) changeHealth(change int) {
	p.mu.Lock()
	defer p.mu.Unlock()
	p.health += change
}

// now the concern of the loops is clearer and easier to read:
func startUiLoop(p *Player) {
	ticker := time.NewTicker(time.Second)
	for {
		fmt.Printf("player health: %d\r", p.getHealth())
		<-ticker.C
	}
}

func StartGameLoop(p *Player) {
	ticker := time.NewTicker(time.Millisecond * 300)
	for {
		p.changeHealth(-1 * rand.Intn(20))
		if p.getHealth() <= 0 {
			fmt.Println("Game Over, health = 0")
			break
		}
		<-ticker.C
	}
}
```

### atomic-values another solution to the problem:
There can only happen one atomic Process at a time.
- so this is another way to avoid a race condition by reading/writing at the same time

- pros: less overhead and complexity, or setup required compared to a mutex
```go
type Player struct {
	health int32
}

func (p *Player) getHealth() int {
	return int(atomic.LoadInt32(&p.health))
}

func (p *Player) changeHealth(change int) {
	health := p.getHealth()
	atomic.StoreInt32(&p.health, int32(health+change))
}
```