FROM node:20-alpine

WORKDIR /app

COPY package.json yarn.lock* ./

RUN yarn

COPY . .

RUN yarn lint

RUN yarn test

RUN yarn build

EXPOSE 3000

# Запуск приложения
CMD ["yarn","start"]
