FROM node:20

WORKDIR /app

COPY . .

RUN nmp i

RUN npm i puppeteer

CMD ["npm", "start"]

EXPOSE 8000

