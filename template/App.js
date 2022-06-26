import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {GetDataFromStorage, SetDataToStorage, AppLife, GetDataFromServer} from './Tools.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from "react";
import { WebView } from 'react-native-webview';
import { Storage } from 'expo-storage';
import * as constants from "./Constants";
import axios from "axios";
import * as Notifications from 'expo-notifications';

export default function App() {    
    let [current_link, setData] = useState(constants.block_banner);
    const debug = true;

        useEffect(() => {
        const launch = async () => {
            const current_link_ = AppLife();
            setData(current_link_);
            registerForPushNotificationsAsync();
        }
        launch();
    }, [])

    console.log('current_link=', current_link);
    current_link = AppLife();
    return (<Text>{current_link}</Text>);
    
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
