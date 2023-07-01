FROM node:20

WORKDIR /app

COPY index.html index.js init.js package.json yarn.lock .

RUN yarn

RUN yarn parcel build index.html

FROM node:20-alpine

WORKDIR /app

RUN yarn add serve

COPY --from=0 /app/dist dist

ENTRYPOINT ["/app/node_modules/.bin/serve"]

CMD ["dist"]
