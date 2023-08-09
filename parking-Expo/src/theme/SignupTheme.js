import { StyleSheet } from "react-native";

export const SignupStyles = StyleSheet.create({

    formContainer:{
        flex:1,
        paddingHorizontal:30,
        justifyContent:'center',
        height:600,
        marginBottom:50
    },
    title:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
        // marginTop:100,
        // marginLeft:100
    },
    label:{
        marginTop:30,
        color:'white',
        fontWeight:'bold'
    },
    inputField:{
        color:'white',
        fontSize:20
    },
    inputFieldIOS:{
        borderBottomColor:'white',
        borderBottomWidth:2,
        paddingBottom:4
    },
    buttonContainer:{
        alignItems:'center',
        // marginTop:20
    },
    button:{
        borderWidth: 2,
        borderColor: 'white',
        paddingHorizontal:20,
        paddingVertical:5,
        borderRadius:20,
        marginTop:10,
        width:200,
    },
    buttonText:{
        color:'white',
        fontSize:18,
        textAlign:'center'
    },
    newUserContainer:{
        alignItems:'center'
    },
    buttonReturn:{
        position:'absolute',
        top:50,
        left:20,
        borderWidth:2,
        borderColor:'white',
        paddingHorizontal:10,
        paddingVertical: 5,
        borderRadius:20
    }
})