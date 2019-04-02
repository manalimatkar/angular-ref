FROM node:7

RUN npm i -g npm3 && \
  npm3 -g uninstall npm && \
  npm3 i -g npm@4.2.0 && \
  npm -g uninstall npm3

WORKDIR /code
