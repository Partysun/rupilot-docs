FROM node:lts

ARG NODE_ENV=dev
ENV NODE_ENV=${NODE_ENV}
ARG REVISION=hidden
ENV REVISION=${REVISION}

WORKDIR app
COPY ./package*.json .
RUN npm ci
COPY . .
EXPOSE 3000