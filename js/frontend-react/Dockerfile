FROM node:12.6.0 as react-build

WORKDIR /shared

COPY . /shared

RUN yarn
RUN yarn build
