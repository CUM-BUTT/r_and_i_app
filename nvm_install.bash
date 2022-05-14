#!/bin/bash

dpkg --get-selections | grep node
sudo apt purge nodejs
sudo apt install build-essential checkinstall
sudo apt install libssl-dev
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
source /etc/profile
nvm ls-remote
nvm install 14.14.0
nvm use 12.14.0
expo install react-native-webview
