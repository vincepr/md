# part5 - NGINX Api-Gateway
- from the following repo: https://github.com/kubernetes/ingress-nginx we get:
```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.2/deploy/static/provider/cloud/deploy.yaml
```
- once everything has set up (will take some time), if we `kubectl get deployment/pods` the new ingress pod will not show up.
  - this is because of namespaces. We used the **default** one for everything so far. While **ingress-nginx** got just created with the previous apply.
- the following command will show us the 2 setup steps and the currently-active pod:
```
kubectl get pods --namespace=ingress-nginx
# NAME                                        READY   STATUS      RESTARTS   AGE
# ingress-nginx-admission-create-44pp4        0/1     Completed   0          4m49s 
# ingress-nginx-admission-patch-vff6h         0/1     Completed   0          4m49s 
# ingress-nginx-controller-778d4c6454-s2qv8   1/1     Running     0          4m49s 

kubectl get pods --namespace=ingress-nginx
# NAME                                 TYPE           CLUSTER-IP      EXTERNAL-IP   PORT(S)                      AGE
# ingress-nginx-controller             LoadBalancer   10.96.167.71    localhost     80:31303/TCP,443:32350/TCP   8m54s
# ingress-nginx-controller-admission   ClusterIP      10.99.150.154   <none>        443/TCP                      8m54s
```

- we create `K8S/ingress-srv.yaml` to declare our Api-Gateway routing:
```yaml
# in this file we basically define the routing
# that the ingress API-Gateway will use
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-srv
  annotations:
    kubernetes.io/ingress.class: nginx
    nginx.ingress.kubernetes.io/use-regex: 'true'
## we define the rules of our routing
spec:
  rules:
  ## we want to use our loopback adress here, we will make the 'acme.com' point tot that
  ## - we add "127.0.0.1 acme.com" to 
    - host: acme.com
      http:
        paths:
        ## this is the endpoint where we can get/getById/Post platforms
          - path: /api/platforms
            pathType: Prefix
            backend:
              service:
                name: platforms-clusterip-srv
                port:
                  number: 80
          ## this is the endpoint where the signal from platforms->commands gets send
          - path: /api/c/platforms
            pathType: Prefix
            backend:
              service:
                name: commands-clusterip-srv
                port:
                  number: 80
```
-  we add the folowing line to `C:\Windows\System32\drivers\etc\hosts`
  - were basically hardcoding this DNS entry, that should always get priority over a DNS lookup
```
127.0.0.1 acme.com
```

- now we apply those settings:
```
kubectl apply -f K8S/ingress-srv.yaml
```

- now we can directly hit our gateway: `http://acme.com/api/platforms/` using postman.