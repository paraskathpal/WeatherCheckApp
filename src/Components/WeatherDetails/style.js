import { StyleSheet,Dimensions } from 'react-native'

const {width} = Dimensions.get('window');
export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:"#ffffff"
    },
    detailsText: {
        fontSize:26
    }
})