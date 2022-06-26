import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {AppLife} from './js/tools.js';
import {useEffect, useState} from "react";
import { WebView } from 'react-native-webview';
import * as constants from "./js/constants.js";
import { registerForPushNotification } from "./js/push_notifications.js"

export default function App() 
{       
  let [current_link, setData] = useState(" ");
  const debug = true;

  useEffect(() => {
      registerForPushNotification().then(token=>console.log(token));
      //AppLife().then(setData);
      (async () => 
      {
        const {current_link_ } = AppLife();
        console.log("current", current_link_);
        setData(current_link_);
      })();
  }, [])
  
  //console.log('current_link=', current_link);
  //current_link = AppLife();
  //return (<Text>{current_link}</Text>);
  
  return (
    <WebView 
      style={styles.container}
      source={{ uri: current_link }}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
