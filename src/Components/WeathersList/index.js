import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  FlatList
} from 'react-native';
import styles from './style';
import {Config} from '@common';

export default class WeathersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  _renderItem = ({item}) => {
    console.log(item)
    return (
      <View style={styles.itemView}>
        <Text>{item.dt_txt}</Text>
        <Text>{Config.convertKelvinToCelsius(item.main.temp)}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
            data={this.props.weatherData}
            keyExtractor={(index) => index}
            renderItem={this._renderItem}
        />
      </View>
    );
  }
}
