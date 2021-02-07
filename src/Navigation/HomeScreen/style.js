import { StyleSheet,Dimensions } from 'react-native'

const {width} = Dimensions.get('window');
export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:"#ffffff"
    },
    loading:{
        width:width*0.8,
        height:width*0.8
    },
    warningText:{
        fontSize:16,
        textAlign:'center',
        paddingHorizontal:width*0.05
    },
    touchableText:{
        fontSize:18,
        color:'#012393'
    },
    button:{
        width:150,
        height:40,
        borderRadius:5,
        borderWidth:1,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    }
})
