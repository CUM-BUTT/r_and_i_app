
import * as constants from './constants.js'
//import { AsyncStorage } from '@react-native-async-storage/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Storage } from 'expo-storage';
import axios from "axios";


// '{"next_payment_date": 1641579427.328656, "validation_service": 127.0.0.1:8000/verification, "block_banner": 127.0.0.1:8000/block_banner}'
function RespDataToDict(non_valid_json)
{
  non_valid_json = non_valid_json.replace(/[{}"\n]/g, ' ', );
  console.log('non_valid_json', non_valid_json);

  var splitted = non_valid_json.split(/,/);
  console.log('splitted', splitted);
  var result = {};

  for (var index = 0; index < splitted.length; ++index)
  {
    var buff = splitted[index].split(/ : /);
    console.log('buff', buff);
    result[buff[0].replace(/ /g, '')] = buff[1].replace(/ /g, '');
  }
  console.log('result', result);
  return result;
}

async function GetDataFromServer()
{
    const resp = await axios.get(constants.validation_service,
                            {params: {user_site: constants.user_site}});
    var data = resp.data;
    console.log('data getted from server', data, typeof (data));

    data = RespDataToDict(data);
    return data;
}

async function GetDataFromStorage()
{
    let data = await AsyncStorage.getItem(constants.data_storage_key);
    console.log('get data from storage', data);
    data = RespDataToDict(data);
    data = JSON.parse(data);
    console.log('parse data from storage', data, typeof(data));

    return data;
}

async function SetDataToStorage(data)
{
    data = JSON.stringify(data);
    console.log('string data', data);
    await AsyncStorage.setItem(constants.data_storage_key, data);
    console.log('data saved to storage', data, typeof(data));
}

function IsTimeToPay(data) {
    console.log('date now', Date.now(),
                'time to pay', parseFloat(data.next_payment_date));

    var is_time = (Date.now() > parseFloat(data.next_payment_date));
    console.log('is time to pay', is_time);
    return is_time;
}

export async function AppLife()
{
    let data = null;//= await GetDataFromStorage();

    if (data == null)
    {
        data = await GetDataFromServer();
        await SetDataToStorage(data);
    }
    var is_time_to_pay = IsTimeToPay(data);

    var current_link = "";
    if (!is_time_to_pay)
    {
        current_link = data.block_banner;
    }
    else
    {
        current_link = constants.user_site;
    }
    console.log('current_link = ', current_link);

    return current_link;
}
