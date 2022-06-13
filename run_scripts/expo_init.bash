#!/bin/bash

name="template"
npm install -g expo-cli
npm install axios
nvm install 14.14.0
nvm use 12.14.0
nvm use 14.14.0
nvm install 14.14.0
expo init $name

# dont work run by hand
cd $name

sudo npm start
sudo chown -R idegtyarev:idegtyarev ./