export default {
  API_KEY: '',
  convertKelvinToCelsius: (temp) => {
    return parseFloat(temp-273).toFixed(2)
  }
};