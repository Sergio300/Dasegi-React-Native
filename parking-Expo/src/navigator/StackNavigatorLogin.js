import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React,{useContext, useState}  from 'react'
// import { ScreenStackHeaderConfig } from 'react-native-screens';

//importamos las pantallas de inicio que estara en el primer stack de navegacion si no se ha registrado
import { FormSingupScreen } from '../screens/FormSingupScreen';
import {FormRegisterScreen} from '../screens/FormRegisterScreen';

//otra navegacion
import { TabsNavigator } from './TabsNavigator';
import AuthContext from '../context/AuthContext';
import { NoticePrivacyScreen } from '../screens/NoticePrivacyScreen';

const Stack = createNativeStackNavigator();

export const StackNavigatorLogin = ()=>{

  // const {login} = useContext(AuthContext)
  const { login, validarCorreo } = useContext( AuthContext )
  return (
    <Stack.Navigator
      screenOptions={
        {
          headerShown: false,//esto es para el titulo de la cabecera
          // cardStyle es de la tarjeta de no se qu
          cardStyle: {
            backgroundColor: 'white'
          }
        }
      }
    >
      {
        (login ==false)
        ?(
          <>
            <Stack.Screen name="FormSingupScreen" options={{title: "Inicio"}} component={ FormSingupScreen } />
            <Stack.Screen name="FormRegisterScreen" options={{title: "Crear cuenta" }} component={ FormRegisterScreen } />  
            <Stack.Screen name="NoticePrivacyScreen" options={{title: "Aviso de privacidad" }} component={ NoticePrivacyScreen } />  
          </>
        )
        :(
          <>
            <Stack.Screen name="HomeScreen" component={ TabsNavigator } />
          </>
        )
      }
    </Stack.Navigator>
  );
}