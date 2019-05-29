## to run this node based  api server on a   docker container  do the below 
- cd to root directory xebia-microservice-mean-backend
- run "docker-compose down  rm --all"  
- then eun docker-compose up --build 
- the above will spin up a  container runing the  api service 
- the  api service internally hits the db container already running as part of repository "xebia-microservice-db"
- the api server is up at localhost:3000 