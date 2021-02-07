import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
} from 'react-native';
import styles from './style';
import {Config} from '@common';

export default class WeatherDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  render() {
      let {weatherData, city} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.detailsText}>
          {Config.convertKelvinToCelsius(weatherData[0].main.temp)}
        </Text>
        <Text style={styles.detailsText}>
          {city.name}, {city.country}{' '}
        </Text>
      </View>
    );
  }
}
