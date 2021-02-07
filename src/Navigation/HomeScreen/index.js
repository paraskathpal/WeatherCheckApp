import React, {Component}  from 'react';
import {
  SafeAreaView,
  Alert,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import styles from './style';
import { WeatherDetails, WeathersList } from '@components';
import { PERMISSIONS,request, RESULTS, openSettings } from 'react-native-permissions';
import { fetchWeather, isFetching } from '@redux/Actions';
import {connect} from 'react-redux';

class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            isLocationGranted:false,
        };
    }

    async componentDidMount(){
        this.setState({isLoading:true})
        await this.getWeatherDetails()
    }

    getWeatherDetails = () => {
        request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(async response =>{
          if(response == 'granted'){
              this.setState({isLocationGranted:true})
            await this.props.fetchWeather();
            this.setState({isLoading:this.props.isFetching})
          } else {
              this.setState({isLocationGranted:false})
          }
        });
    }

    render(){
        if(!this.state.isLocationGranted) {
            return (
              <SafeAreaView style={styles.container}>
                  <Text style={styles.warningText}>
                    Please Allow location permission to access the weather
                    forecast for your location.{' '}
                  </Text>
                  <Text style={styles.touchableText} onPress={() => openSettings()}>
                      Open settings
                  </Text>
              </SafeAreaView>
            );
        } else{
            return (
              <SafeAreaView style={styles.container}>
                {this.props.isFetching ? (
                  <View>
                    <Image
                      source={require('../../Assets/loader.gif')}
                      style={styles.loading}
                    />
                  </View>
                ) : this.props.weatherDetails &&
                  this.props.weatherDetails.list ? (
                  <View>
                    <WeatherDetails
                      city={this.props.weatherDetails.city}
                      weatherData={this.props.weatherDetails.list}
                    />
                    <WeathersList
                      weatherData={this.props.weatherDetails.list}
                    />
                  </View>
                ) : (
                  <View style={styles.container}>
                    <Text>Something went wrong at our end.</Text>
                    <TouchableOpacity style={styles.button} onPress={this.getWeatherDetails}>
                        <Text>Retry</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </SafeAreaView>
            );
        }
    }
} 

const mapStateToProps = ({state}) => {
  return {
    weatherDetails: state.weatherDetails,
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps, {
  fetchWeather,
  isFetching
})(HomeScreen);