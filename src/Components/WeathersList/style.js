import { StyleSheet,Dimensions } from 'react-native'

const {width} = Dimensions.get('window');
export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:"#ffffff",
        borderTopWidth:1,
        borderColor:'#000000'
    },
    itemView:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center",
        width,
        padding:width*0.03,
        borderBottomWidth:1,
        borderColor:'#000000'
    }
})