FROM node:18-alpine3.14

WORKDIR /var/app

COPY package*.json ./

RUN npm install

RUN npm run nest:build

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:prod"]