import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { FormSingupScreen } from './FormSingupScreen'

import { SignupStyles } from '../theme/SignupTheme'
// context
import AuthContext from '../context/AuthContext';

export const NoticePrivacyScreen = ({navigation}) => {

  // const navigator = useNavigation();

  const navigator = useNavigation();

  const {login, logout, userRegister,setLogin,userBD} = useContext(AuthContext)
  
  const handleAceptTerms =()=>{
    // console.log(formRe)
    //     crearCuenta(formRe)

    // if(userRegister)
    // {
    //   console.log('se agrego corre')
      setLogin(true)
      if(login){
        navigator.replace('HomeScreen')
      }
    // }
    // else{
    //   alert('completa los campos del formulario')
    // }
    // navigator.replace('HomeScreen')
  }

  useEffect(()=>{
    console.log(userBD)
  },[])
  
  return (
    <View>
      <Text>Aviso de privacidad</Text>

      <View 
        style={{
            width:300,
            height:300,
            borderColor:'red',
            borderWidth:1,
            alignContent:'center',
            alignItems:'center',
            marginTop:200,
            marginHorizontal:50
        }}
      >
        <Text
            style={{
                fontSize:18
            }}
        >
        En DASEGI PARK, la información y datos personales de los beneficiarios, colaboradores, donantes, asociados, empleados y proveedores, es tratada de forma estrictamente confidencial y con la secrecía necesaria para lograr los fines de la organización, por lo que hacemos un esfuerzo permanente para salvaguardarla, de conformidad con los artículos 8, 15, 16 y 36 de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
        </Text>
      </View>

        <TouchableOpacity
            // activeOpacity={0.8}
            style={{
                borderWidth: 2,
                borderColor: 'red',
                paddingHorizontal:20,
                paddingVertical:5,
                borderRadius:20,
                marginTop:10,
                width:200,
            }}
            // esto de abajo es para destruir la pantalla y con ello el estado de los campos para que no haya conflicto, se hace un boton para que se pueda navegar hacia atras
            // onPress={ ()=>navigator.replace('FormRegisterScreen')
            // onPress={ ()=>navigator.navigation('FormSingupScreen')
            onPress={ handleAceptTerms }
        >
            {/* <Text style={SignupStyles.buttonText}> Registrarse </Text> */}
            <Text > Aceptar </Text>
        </TouchableOpacity>
      {/* </View> */}
    </View>
  )
}