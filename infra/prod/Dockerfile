FROM node:12.10.0-alpine

WORKDIR /app

ADD ./ /app

EXPOSE 80

RUN npm install --unsafe-perm -g pm2 yarn && \
    chmod +x /usr/local/bin/yarn

ENV PM2_PUBLIC_KEY vlmw29aq6i120br
ENV PM2_SECRET_KEY 6bhp5vshvvy5kqz

RUN yarn &&\
    yarn build-prod

ENTRYPOINT rm -rf node_modules && \
           yarn && \
           yarn prod
