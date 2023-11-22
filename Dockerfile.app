FROM node:16

RUN apt-get update && apt-get install -y \
    net-tools \
    lsof

RUN npm install -g nodemon

WORKDIR /usr/src/app

RUN npm install mysql \
    express

COPY /src/app/ ./

EXPOSE 3000