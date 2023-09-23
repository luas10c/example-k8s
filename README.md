# Kubernetes

📜 **About**

In this repository I learned how to orchestrate containers using Kubernetes

🚀 **How to use**

To run the project you will first need **"kind"** and **"kubectl"** installed.

Now you need to build your docker image.

You also need to deploy your image to docker hub, you can also use other services to deploy it.

```sh
# command to build a docker image
docker build -t @username:nodejs-production
```

Before deploying your image you need to authenticate to docker hub

```sh
# command to authenticate to docker hub
docker login
```

Now that you've built your image and deployed it

You can create your deployment and load balancer service with the following commands.

```sh

kubectl apply -f ./k8s/deploy.yml

kubectl apply -f ./k8s/service.yml
```
