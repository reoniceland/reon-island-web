FROM node:11.15

WORKDIR /usr/src/app
ENV NODE_ENV=production

# Install node dependencies:
ADD package.json .
ADD yarn.lock .
RUN yarn install --pure-lockfile --non-interactive

# Build using webpack and remove all node dependencies:
ADD . .
RUN yarn build && yarn server-build && yarn storybook-build

CMD ["node", "server/dist/main.js"]
