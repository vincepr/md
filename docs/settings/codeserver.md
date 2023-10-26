# install codeserver

## create a non root user and set up ufw
´´´
adduser vince
usermod -aG sudo vince
´´´

## set up ufw
´´´
sudo apt-get update -y
sudo apt-get install nginx ufw -y
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'
sudo ufw allow 5000:6000/tcp
sudo ufw enable
´´´

## install codeserver
- install codeserver/openvscodeserver
- https://github.com/coder/code-server
## update npm version in ubuntu
```
https://github.com/nodesource/distributions
```
## add codeserver to startup
```
sudo nano /etc/systemd/system/codeserver.service
```

```
[Unit]
Description=codeserver
After=nginx.service

[Service]
Type=simple
ExecStart=code-server
Restart=always
User=vince

[Install]
WantedBy=multi-user.target
```
```
sudo systemctl daemon-reload
sudo systemctl start codeserver
sudo systemctl enable codeserver
```

### hashed password for codeserver
```
echo -n "thisismypassword" | npx argon2-cli -e
nano ~/.config/code-server/config.yaml
```
- we copy the hashed password **enclosed by quotes**:
```yaml
auth: password
hashed-password: "$argon2i$v=19$m=4096,t=3,p=1$wst5qhbgk2lu1ih4dmuxvg$ls1alrvdiwtvzhwnzcm1dugg+5dto3dt1d5v9xtlws4
"
```

## add nginx reroute to codeserver and tls it
```
sudo nano /etc/nginx/sites-available/code-server.conf
```

```                               
server {
        listen 80;
        listen [::]:80;
        server_name vs.vincepr.de;

        location / {
                proxy_pass http://localhost:3333;
                proxy_set_header Host $http_host;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection upgrade;
                proxy_set_header Accept-Encoding gzip;
        }
}

```
```
sudo ln -s /etc/nginx/sites-available/code-server.conf /etc/nginx/sites-enabled/code-server.conf
sudo nginx -t
sudo systemctl status nginx
sudo systemctl restart nginx


sudo apt install -y nginx certbot python3-certbot-nginx
sudo certbot --nginx
```
