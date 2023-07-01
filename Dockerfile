FROM node:20

WORKDIR /app

COPY index.html index.js init.js package.json yarn.lock .

RUN yarn

RUN yarn parcel build index.html

RUN yarn add serve

ENTRYPOINT ["/app/node_modules/.bin/serve"]

CMD ["dist"]
