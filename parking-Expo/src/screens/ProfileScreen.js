import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { FormSingupScreen } from './FormSingupScreen'

import { SignupStyles } from '../theme/SignupTheme'
// context
import AuthContext from '../context/AuthContext';


// const initialFormEdit ={
//   nombre: '',
//   apellido: '',
//   correo: '',
//   contra: '',
//   departamento: '',
//   idLuga:''
// }
export const ProfileScreen = ({navigation, route}) => {

  // const navigator = useNavigation();

  const navigator = useNavigation();

  const {login, logout, userBD,updateUser} = useContext(AuthContext)
  const [edit, setEdit]=useState(false)
  const [formEd,setFormEd] = useState(userBD)
  // const [edit, setEdit]=useState(false)
  
  const handleLogout =(stateProfile)=>{
    logout(stateProfile)
  }

  
  const handleChange = (value,field) => {
    setFormEd({
      ...formEd,
      [field]: value
    });
  };

  const handleEdit =(valor)=>{
    console.log('se oprimio editar')
    // setEdit(true)
    if(valor =='edit')
    {
      setEdit(true)
      
    }
    else{
      setEdit(false)
      console.log('formulario')
      console.log(formEd.NOMBRE)
      // console.log(userBD)
      // updateUser({ID: formEd.ID},
      // {NOMBRE:formEd.NOMBRE,CORREO:formEd.CORREO, CONTRA:formEd.CONTRA, DEPARTAMENTO:formEd.DEPARTAMENTO})
    }
    // (valor == 'save')
  }



  useEffect(()=>{
    console.log(userBD)
    console.log(userBD.ID)
  },[])
  return (
    <View>
      <Text>Perfil en construccion</Text>

      {/* <View style={SignupStyles.newUserContainer}> */}
    {
      (edit == false)
      ?
      (
      <View>
        <Text>Usuario: {userBD.NOMBRE} #{userBD.DEPARTAMENTO}</Text>
        <Text>Correo: {userBD.CORREO}</Text>
        <Text>Cambiar contraseña</Text>
        <Text>Departamento: {userBD.DEPARTAMENTO}</Text>
        <TouchableOpacity
        style={{
          width:100,
          height:30,
          borderWidth:2
        }}
        onPress={()=>handleEdit('edit')}
      >
        <Text>Editar Perfil</Text>
      </TouchableOpacity>
      </View>
      )
      :(
        <View>
            <Text>Nombre</Text>
            <TextInput
              placeholder='Nombre'
              onChangeText={(value) => handleChange(value,'nombre')}
            />
            <Text>Coreo</Text>
            <TextInput
              placeholder='Correo'
              keyboardType='email-address'
              onChangeText={(value) => handleChange(value,'email')}
            />
            <Text>Contraseña</Text>
            <TextInput
              placeholder='Cambiar contraseña'
              onChangeText={(value) => handleChange(value,'contra')}
            />
            <Text>Departamento</Text>
            <TextInput
              placeholder='Departamento'
            />
            <TouchableOpacity
              style={{
                width:100,
                height:30,
                borderWidth:2
              }}
              onPress={()=>handleEdit('save')}
            >
              <Text>Guardar</Text>
              </TouchableOpacity>
        </View>
        )
    }
      


      
        <TouchableOpacity
        style={{
          width:100,
          height:30,
          borderWidth:2

        }}
            // activeOpacity={0.8}
            // style={SignupStyles.button}
            // esto de abajo es para destruir la pantalla y con ello el estado de los campos para que no haya conflicto, se hace un boton para que se pueda navegar hacia atras
            // onPress={ ()=>navigator.replace('FormRegisterScreen')
            // onPress={ ()=>navigator.navigation('FormSingupScreen')
            onPress={ ()=> handleLogout('logout') }
        >
            {/* <Text style={SignupStyles.buttonText}> Registrarse </Text> */}
            <Text > Salir </Text>
        </TouchableOpacity>
      {/* </View> */}
    </View>
  )
}