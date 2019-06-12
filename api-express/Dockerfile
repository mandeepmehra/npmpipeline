# Create image based on the official Node LTS image from dockerhub
FROM node:10-alpine


ARG configuration=production
ARG buildOutputDir=./dist
ARG sourceDir=./src,
ARG sample=defaultsample

# Create a directory where our app will be placed
RUN mkdir -p /app

# Change directory so that our commands run inside this new dir
WORKDIR /app

# Copy dependency definitions
COPY package.json /app

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /app



ENV NODE_ENV=$configuration,
ENV npm_package_config_buildOutputDir=${buildOutputDir},
ENV npm_package_config_sourceDir=${sourceDir},
ENV npm_package_config_sample=${sample}
ENV npm_package_config_configuration=${configuration}


# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]
