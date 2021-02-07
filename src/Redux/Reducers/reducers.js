
const initialState = {
  userLocation:null,
  isFetching:true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_WEATHER":
        return  {
        ...state,
        weatherDetails:action.payload.weather
        }
    case "IS_FETCHING":
        return {
          ...state,
          isFetching: true,
        };
    case "FETCHED":
        return {
          ...state,
          isFetching: false,
        };
    default:
        return state;
  }
}
