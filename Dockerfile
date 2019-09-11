FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install --save nodemon
RUN npm install --save express
RUN npm install --save-dev jest
COPY . .
EXPOSE  3000
CMD [ "nodemon", "index.js" ]
