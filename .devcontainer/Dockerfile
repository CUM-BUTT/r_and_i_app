FROM node:16.0.0 
#latest
COPY . .
#LABEL version=1.2.1

ENV ADB_IP="192.168.1.1"
ENV REACT_NATIVE_PACKAGER_HOSTNAME="192.255.255.255"

EXPOSE 19000
EXPOSE 19001


RUN yarn --network-timeout 100000

RUN apt update
RUN apt install nodejs npm -y
RUN npm install expo expo-cli -g -y
#RUN npm install -g turtle-cli
RUN yarn install


CMD expo start i
#RUN apt-get update && \
#    apt-get install android-tools-adb