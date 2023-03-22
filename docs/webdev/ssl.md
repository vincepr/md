# ssl / https for a (local) dev server
To get access to otherwise restricted features (like webRTC) we need to configure some local ssl cert and use it to upgrade our dev server to https.
## generate the certificate
using OpenSSL
```
openssl req -x509 -out localhost.crt -keyout localhost.key \
  -days 365 \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
```
- `req` : command for creating certificates
- `-x509` : self-signed cert
- `-out` : path to the CertFile ex ourFile.crt
- `-keyout` : path to the Key ex ourFile.key
- `-days` : days before expiration
- `-newkey` : type of the encription
- `-nodes` : don't encrypt the key
- `-subj` : provides certificate extension 
- `-config` : specify alternative configuration

## place it in its location
- move the certificate and key to peroject/certificates
- add that folder to the .gitignore

## add to keychain
- double click and add to your keychain

- in keychain windows select certificates and set it to trusted

## update nextjs server config to use cert

- https://medium.com/@greg.farrow1/nextjs-https-for-a-local-dev-server-98bb441eabd7