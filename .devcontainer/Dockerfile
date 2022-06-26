FROM node:16.0.0 

LABEL version=1.2.1
#COPY . .

#ENV ADB_IP="192.168.1.1"
#ENV REACT_NATIVE_PACKAGER_HOSTNAME="192.255.255.255"

RUN yarn --network-timeout 100000

RUN apt update
RUN apt install nodejs npm\
               android-sdk -y
RUN npm install expo expo-cli -g -y
RUN yarn global add turtle-cli

CMD yarn install; \
     expo start

RUN sysctl -w fs.inotify.max_user_watches=524288; \
     sysctl -p
#RUN apt-get update && \
#    apt-get install android-tools-adb
