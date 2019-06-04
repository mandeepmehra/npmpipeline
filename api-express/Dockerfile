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
ENV buildOutputDir=${buildOutputDir},
ENV sourceDir=${sourceDir},
ENV sample=${sample}


# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]
