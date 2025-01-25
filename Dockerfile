# Base Image
FROM node:23-alpine3.20 AS phase1

WORKDIR /app

# Copy the package.json, tsconfig.json and yarn.lock files
COPY --chown=node:node package.json tsconfig.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY --chown=node:node . .

# build react-app
RUN yarn build

# Phase 2 - Get the Build and host on nginx
FROM nginx:1.27.3-alpine
COPY --from=phase1 /app/build /usr/share/nginx/html