# Auth using Json-Web-Token
## JSON-Web-Token
Jason-Web-Token-standard - https://jwt.io/introduction

1. After **Authentication** (ex login) we have verified our user. Now we can pass him a Token, with a expiration time,  his identifiers and maybe his access rights or allowed usage.
2. He can then use that Token for this session. Maybe store it in his cookies if on a browser. 
3. And pass it with his requests so we can use that information for **authorization**, ex making sure use Paul can edit Pauls-Contact info, but not Dorians.

## Golang package
jwt package for golang `go get -u github.com/golang-jwt/jwt/v5`


## Minimal JWT-example:
```go
package main

import (
	"fmt"
	"os"
	"time"
	"github.com/golang-jwt/jwt/v5"
)


func main(){

	// create token for user, for example when login in
	token, err := createJWTToken("iban-12345", true)
	if err != nil{
		fmt.Print("token creation failed")
	}
	fmt.Printf("token is: \n%v\n\n",token)

	// now user sends his token with a new request and we validate it:
	claims, err := getJWTClaims(token)
	if err != nil{
		fmt.Println("Good idea to have generic Error msg here like - no access if we path it on", err)
	}

	// now we can use this to check if his token supports his request
	fmt.Printf("user-token says he is:%v, and isAdmin: %v, IssuerofToken was: %v \n", claims.Iban, claims.IsAdmin, claims.RegisteredClaims.Issuer)
}



// Claims from a Token, stores who the user is, what he can access and or and for how long 
type JWTClaims struct {
	Iban string `json:"iban"`
	IsAdmin bool `json:"isAdmin"`
	jwt.RegisteredClaims
}

func NewJWTClaims(iban string, isAdmin  bool) JWTClaims{
	return JWTClaims{
		Iban: iban,
		IsAdmin: isAdmin,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(18 * time.Hour)),
			IssuedAt:  jwt.NewNumericDate(time.Now()),
			NotBefore: jwt.NewNumericDate(time.Now()),
			Issuer:    "go-Auth",
			//Subject:   "somebody",
			//ID:        "1",
			//Audience:  []string{"somebody_else"},
		},
	}
}

// creates a Token to pass to our Users after ex. Login
func createJWTToken(iban string, isAdmin bool) (string, error){
	mySigningKey := keyFromEnvForJWT()
	claims := NewJWTClaims(iban, isAdmin)
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(mySigningKey)
}

// validation happens here, returns our claims
func getJWTClaims(tokenString string) (*JWTClaims, error){
	mySigningKey := keyFromEnvForJWT()
	token, err := jwt.ParseWithClaims(tokenString, &JWTClaims{}, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {	// Validate the encrypt-Algorythm is the one what we expect 
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}
		return []byte(mySigningKey), nil
	})
	if claims, ok := token.Claims.(*JWTClaims); ok && token.Valid {
		return claims, nil
	} else {
		return nil, err
	}
}

// read the Secret-Key we use for encryption from env.
func keyFromEnvForJWT() []byte{
	key := os.Getenv("JWT_KEY")
	if key == "" {
		key = "DefaultSecretGoesBrrr"
		fmt.Println("Remainder - Dont forget to set your key, example $ export JWT_KEY=bhJas5_Sk-7El3VuCx7QerFuFS.Ns7bKBiJ_4O3deoZw")
	}
	return []byte(key)
}
```