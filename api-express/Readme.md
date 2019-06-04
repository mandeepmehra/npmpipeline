## to run this node based  api server on a   docker container  do the below 
- cd to root directory xebia-microservice-mean-backend
- run "docker-compose down  rm --all"  
- then eun docker-compose up --build 
- the above will spin up a  container runing the  api service 
- the  api service internally hits the db container already running as part of repository "xebia-microservice-db"
- the api server is up at localhost:3000 

# to create a custom repo in github 
$ helm package $YOUR_CHART_PATH/ # to build the tgz file and copy it here
$ helm repo index . # create or update the index.yaml for repo
$ git add .
$ git commit -m 'New chart version'
$ git push

$ helm repo add xebiagithubchart 'https://raw.githubusercontent.com/konarpriyanku/xebia-helmcharts/master'
$ helm repo update
$ helm search api-chart
NAME                            CHART VERSION   APP VERSION     DESCRIPTION
xebiagithubchart/api-chart      0.1.0                           A Helm chart for Kubernetes

# to create custom repo in chart museum 
docker run --rm -it \
  -p 8082:8080 \
  -v $(pwd)/charts:/charts \
  -e DEBUG=true \
  -e STORAGE=local \
  -e STORAGE_LOCAL_ROOTDIR=/charts \
  chartmuseum/chartmuseum

helm repo add chartmuseum http://localhost:8082