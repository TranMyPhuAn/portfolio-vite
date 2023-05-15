FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx

WORKDIR /usr/share/nginx/html

COPY --from=dist /usr/src/app/dist .

RUN apt-get update

RUN apt-get inseall -y git

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]