# tunnel 
## socat-tunnel
ipv4 to ipv6 tunnel:        
Ipv6 only home-addr (ex. DynDNS-Fritzbox ), tunnel over static server, to make it reachable over shitty configured ipv4-only-places.       


```
socat tunnel socat TCP4-LISTEN:6666,fork,su=nobody TCP6:[raspberrypiipv6]:6666
```

## setup
- lets assume we install socat in `/usr/bin/socat`

- we can make a systemd to autostart it: `/usr/lib/systemd/system/socat-tunnel.service`

```
[Unit]
Description=socat-tunnel
After=nginx.service

[Service]
ExecStart=/usr/bin/socat TCP4-LISTEN:6666,fork,su=nobody TCP6:pcname.12344536251.myfritz.net:8080

[Install]
WantedBy=multi-user.target


```

## alternatives

- golang: https://github.com/FKSE/ip6tun
- https://www.sixxs.net/
- https://yggdrasil-network.github.io/