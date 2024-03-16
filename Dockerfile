FROM node:19-alpine3.16

WORKDIR /portfolio

COPY package.json ./

RUN npm install

CMD npm start