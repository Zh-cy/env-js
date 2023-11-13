FROM node:16

RUN npm install -g nodemon

WORKDIR /usr/src/app

COPY app/package*.json ./

RUN npm install

COPY app/ .

EXPOSE 3000

CMD ["nodemon", "app.mjs"]
