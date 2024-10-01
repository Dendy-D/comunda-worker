FROM node:16

WORKDIR /app

COPY package.json /app

RUN yarn

COPY . .

CMD ["yarn", "dev"]

EXPOSE 5000
