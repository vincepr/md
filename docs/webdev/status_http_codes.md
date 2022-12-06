## HTTP Status Codes

## 2xx Success
| | | ||
|---|---|---|----|
|200|ok|most basic sucess confirmation |
|201|created|created user, shopingcart....|API-calls|
|204|no content|all went well but there is nothing to return|API delete request (ex a user)|

## 3xx Redirection
| | | ||
|---|---|---|----|
|301|moved permanently|website moved to new ip etc|
|304|not modified|has to do with caching|API-call answer to question: "has this data changed from yday"

## 4xx Client Error
| | | ||
|---|---|---|----|
|400|bad request|client sent to little/wrong request|
|401|unauthorized|trying to access something without required authentication|sent no API-key|
|403| forbidden| authentication sent is lacking |API-key used lacks admin|
|404|not found| trying to acces something that is not there|ex. trying to access some API where there is none|

## 4xx Server Error
| | | ||
|---|---|---|----|
|500|internal server error|something broke on the server| ex. database is down|
