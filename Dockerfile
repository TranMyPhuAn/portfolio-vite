FROM node:18

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx

COPY --from=dist /usr/src/app/dist /usr/share/nginx/html

RUN apt-get update

RUN apt-get inseall -y git