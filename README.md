## Prerequisites
- Install Kubernetes cluster lcally using minikune  ( https://kubernetes.io/docs/tasks/tools/install-kubectl/)
- Ensure cluster is running  by pointing the lubectl config to the currect  context 
- Ensure you are able  to see the clusrter nodes "kubectl get nodes"
- Ensure helm  client and server is installed 
    -https://helm.sh/docs/using_helm/#installing-helm
    -https://helm.sh/docs/using_helm/#installing-tiller
    -
## Once clusrter is set up 

- ensure  the below docker images are updated in docker registry ( currently using doker hub )
    - konarpriyanku/xebia_fe
    - konarpriyanku/xebia_be
    - the db_chart internally uses  the repository bitnami/mongodb
- install the helm charts
- cd into dir xebia-microservice-mean-backend
- run "helm dep list api-chart"
- helm dep update api-chart  ( will put the db-chart dependency  within the chart folder  inside api-chart folder )
- after running the above command you  shoiuld see db-0.1.0.tgz file within api-chart/chart folder
- dry run your char before actual install by running "helm install --debug --dry-run ./mychart."
- update the dependent api-chart by running " helm dep update api-chart"
- run "helm install --name api  -f ./api-chart/custom_values.yaml   ./api-chart" to install the chart in kubernetes 

## to seehow to deploy using helm chart  plesae refer repo https://gitlab.com/xebia-devops/xebia-helmcharts
