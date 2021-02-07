import Geolocation from '@react-native-community/geolocation';
import {create} from 'apisauce';
import {Config} from '@common';

const api = create({
  baseURL: '',
  headers: {
      Accept: 'application/json'
    },
});

export const fetchWeather = () => {
  return dispatch => {
    dispatch({type:"IS_FETCHING"})
    Geolocation.getCurrentPosition(info => {
    if(info){
        let position = {
            longitude:info.coords.longitude,
            latitude: info.coords.latitude
        }
        api
          .get(
            `http://api.openweathermap.org/data/2.5/forecast?lat=${position.latitude}&lon=${position.longitude}&appid=${Config.API_KEY}`,
          )
          .then(response => {
              let weather = response.data
              dispatch({type: 'FETCH_WEATHER', payload: {weather}});
              dispatch({type:"FETCHED"})
            //   return weather;
          });
        };
    })
    }
}   