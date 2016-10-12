FROM node:4.4-onbuild
EXPOSE 1207
RUN apt-get install python-software-properties
RUN add-apt-repository ppa:rwky/redis
RUN apt-get update
RUN apt-get install redis-server
RUN redis-server
RUN npm install -g forever
ENTRYPOINT forever --spinSleepTime 1000 --minUptime 1000 index.js