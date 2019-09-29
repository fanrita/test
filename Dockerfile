FROM cypress/base:10

COPY package.json package.json
RUN yarn install
COPY ./config ./config
COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json
CMD yarn run cypress:run:docker
