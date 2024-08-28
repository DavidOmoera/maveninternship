######################################################################
# NPM Insaller Container Responsible Package and Lib Install
######################################################################
FROM node:lts-alpine3.19 AS deps

RUN apk add --no-cache libc6-compat python3 py3-pip && rm -rf /var/cache/apk/*
RUN mkdir /app
WORKDIR /app

COPY package.json ./
RUN npm install -g npm@10.4.0 
RUN npm install


######################################################################
# Builder Container, Responsible for Compiling App
######################################################################
FROM node:lts-alpine3.19 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . /app

# Have to load variables into .env file for react or specify in package.json command
RUN npm install -g npm@10.4.0
RUN npm run build

#######################################################################
## Runner Container Responsible for Runnning and Serving App
#######################################################################
FROM node:lts-alpine3.19 AS runner
WORKDIR /web

COPY --from=builder /app/build ./


RUN npm install -g serve

EXPOSE 9020

CMD ["serve", "-l", "tcp://0.0.0.0:9020", "-C", "-s", "."]
