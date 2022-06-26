#!/bin/bash

PASSWORD=password
ALIAS=randi_app
KEYSTORE_FILE=keystore.jks

export EXPO_ANDROID_KEYSTORE_PASSWORD=$PASSWORD
export EXPO_ANDROID_KEY_PASSWORD=$PASSWORD
export EXPO_USERNAME=cum_butt
export EXPO_PASSWORD=$PASSWORD
export EXPO_ANDROID_KEYSTORE_PASSWORD=$PASSWORD
export EXPO_ANDROID_KEY_PASSWORD=$PASSWORD

export MYAPP_UPLOAD_STORE_FILE=$KEYSTORE_FILE
export MYAPP_UPLOAD_KEY_ALIAS=$ALIAS
export MYAPP_UPLOAD_STORE_PASSWORD=$PASSWORD
export MYAPP_UPLOAD_KEY_PASSWORD=$PASSWORD

turtle setup:android --sdk-version 44.0.5

keytool -genkeypair -v -keystore $KEYSTORE_FILE -alias $ALIAS \
    -keyalg RSA -keysize 2048 -validity 9125 \
    -dname "CN=Ilya, OU=development, O=randi, L=Vologda, ST=Vologda, C=RU" 

keytool -genkey -v -keystore $KEYSTORE_FILE -alias $ALIAS \
 -keyalg RSA -keysize 2048 -validity 10000 -dname "CN=Ilya, OU=development, O=randi, L=Vologda, ST=Vologda, C=RU" 

turtle build:android \
  --keystore-path $KEYSTORE_FILE \
  --keystore-alias $ALIAS --type apk
