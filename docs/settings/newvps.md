# install codeserver

- install codeserver/openvscodeserver
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
ExecStart=code-server --host 0.0.0.0 --port 3333 
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
## add nginx reroute to codeserver and tls it
```
sudo nano /etc/nginx/sites-avaliable/codeserver.conf
```

```                               
server {
        listen 80;
        listen [::]:80;
        server_name vs.vprobst.de;

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

## update npm version in ubuntu
```
https://github.com/nodesource/distributions
```