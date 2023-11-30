FROM node:16

RUN apt-get update && apt-get install -y \
    net-tools \
    lsof

RUN npm install -g nodemon

WORKDIR /usr/src/app

RUN npm install mysql \
    mysql2 \
    express \
    body-parser \
    cors \
    sequelize

COPY /src/app/ ./

EXPOSE 3000