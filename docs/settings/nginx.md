# nginx
List of nginx, socat, systemd configs 

## openvscode systemd
Create file in ONE of those paths:
`sudo nano /usr/lib/systemd/system/openvscode-server.service`
`sudo nano /etc/systemd/system/openvscode-server.service`

`sudo systemctl daemon-reload`
`sudo systemctl start code-server`
`sudo systemctl enable code-server`

```
server.service                                                                               
[Unit]
Description=openvscode-server
After=network.target

[Service]
Type=simple
ExecStart=/home/code/ovs/bin/openvscode-server --host 0.0.0.0 --port 3001 --without-connection-token --accept-server-license-terms
Restart=always
User=code

[Install]
WantedBy=multi-user.target
```
## openvscode SSH / TLS certificate with letsencrypt
```
sudo apt update
sudo apt install certbot python3-certbot-nginx
```

## dirty basic-http login
```
server {
    auth_basic      "Login Only Area";
    auth_basic_user_file /etc/apache2/.htpasswd;

    root /var/www/terminal.vprobst.de/html;
	index index.html index.htm index.nginx-debian.html;

	server_name terminal.vprobst.de www.terminal.vprobst.de;
	location / {
		try_files $uri $uri/ =404;
	}
}
server {
    listen 80;
    listen [::]:80;
    server_name terminal.vprobst.de www.terminal.vprobst.de;
}
```


## testing

`sudo nano /etc/nginx/sites-available/auth.vincepr.de.conf`
```
server {
        listen 80;
        listen [::]:80;

        server_name auth.vprobst.de;

        location / {            
                proxy_pass http://localhost:3002/;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection upgrade;
                proxy_set_header Accept-Encoding gzip;  

        }
}
```

sudo ln -s /etc/nginx/sites-available/auth.vprobst.de.conf /etc/nginx/sites-enabled/auth.vprobst.de.conf

sudo nginx -t

systemctl status nginx
sudo systemctl restart nginx
