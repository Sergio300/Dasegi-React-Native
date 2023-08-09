import React,{useContext, useEffect, useState}  from 'react'
import { View, Text, TextInput,TouchableOpacity, Platform, KeyboardAvoidingView, Keyboard }  from 'react-native'
import { CommonActions, useNavigation } from '@react-navigation/native' //usa al final core, pero hay que probarlo
import { BackgroundForm } from '../components/BackgroundForm';
import { LogoForm } from '../components/LogoForm';
import { getUsers } from '../../api';

//temas
import { SignupStyles } from '../theme/SignupTheme'

//hooks
import { useForm } from '../hooks/useForm';
import AuthContext from '../context/AuthContext';

//context



const initialLogin ={
    email:"",
    pass:''
}
export const FormSingupScreen =({route})=>{
    //navegacion
    const navigator = useNavigation();
    //useContext
    const { login, validarCorreo } = useContext( AuthContext )
    const [form, setForm] = useState(initialLogin);


    //manejamos el estado segun lo que ingrtesemos en los textos
    const handleChange = (value,field) => {
        setForm({
          ...form,
          [field]: value
        });
      };

      const handleSubmit = async()=>{
        console.log(form)
        validarCorreo(form)
        console.log('entro al evento')
        // console.log('tipo dato lugar')
        // console.log(typeof(emailBD))
        // const data = await getUsers()
        // console.log(data)
        // console.log(data[1])
        // console.log(typeof(data))
        // setEmailBD(data)
        
    //     for (let propiedad in emailBD){
    //         console.log('entra al for')
    //         console.log(emailBD[propiedad])
    //         if(form.email === emailBD[propiedad].correo && form.pass === emailBD[propiedad].contra){
    //             // console.log('el usuario es correoto')
                
    //             // navigator.replace('HomeScreen')
    //         }
            
    //   //   console.log(data[correo].Id_Lugares)

    //   // setPlace(data[propiedad].Id_Lugares)
    // }

        if(login)
        {
            alert('el correo es valido')
            console.log(emailBD)
            // navigator.replace('HomeScreen')

        }
        else{
        console.log('el correo no es valido')
        console.log(emailBD)
        alert('Las credenciales no son validas')
        }
      }

    //para usar mas estados como arreglo pasamo los campos a des estructurar y yap los usamos
    /*
    const { email,password, nombre, onChange } = useForm({
        email:'',
        password:'',
        nombre:''
    })
    */
    // const onLogin =()=>{
    //     console.log({email,password,nombre});
    //     Keyboard.dismiss();  //para cuando presione el boton ocultar el teclado
    // }

    // const [emailBD,setEmailBD]=useState([])
    const [emailBD, setEmailBD] =  useState([])
    const loadApiLogin = async()=>{

    // console.log('tipo dato lugar')
    // console.log(typeof(emailBD))
    // const data = await getUsers()
    // // console.log(data)
    // // console.log(data[1])
    // console.log(typeof(data))
    // setEmailBD(data)
    
    // for (let propiedad in emailBD){
    //     console.log('entra al for')
    //     console.log(emailBD[propiedad])
    //     if(valor === emailBD[propiedad].correo){
    //         console.log('el usuario es correoto')
    //     }
    //   //   console.log(data[correo].Id_Lugares)

    //   // setPlace(data[propiedad].Id_Lugares)
    // }

    // console.log(typeof(place))
    // console.log('un solo correo')
    // console.log(emailBD)
  }

    useEffect(()=>{
        
        // loadApiLogin()
    },[])
    
    return(
        <>
            <BackgroundForm></BackgroundForm>

            <KeyboardAvoidingView
                style={{ flex:1 }}
                behavior={ (Platform.OS ==='ios' ? 'padding' : 'height') } //es para que cuando presiones el teclado no tape los botones, en android no es necesario lo hace bien
            >        

                <View style={SignupStyles.formContainer}>
                    <LogoForm></LogoForm>

                    <Text
                        style={ SignupStyles.title }
                    >Login</Text>

                    <Text style={SignupStyles.label}> Correo electrónico </Text>
                    <TextInput
                        placeholder="Correo electrónico"
                        placeholderTextColor='rgba(255,255,255,0.6)'
                        keyboardType='email-address'
                        underlineColorAndroid='white' //esto se aplico solo para android, es la linea blanca


                        // como vamos a aplicarvarios estilos como android y IOS 
                        style={[
                            SignupStyles.inputField,
                            (Platform.OS === 'ios') && SignupStyles.inputFieldIOS //esta es la linea blanca
                        ]}
                        selectionColor='violet' //para cuando se selecciona el color

                        //TODO: onchange, value
                        // onChangeText={ (value)=> onChange(value,'email')}
                        onChangeText={(value) => handleChange(value,'email')}
                        // value={email}
                        // onSubmitEditing = { onLogin }


                        autoCapitalize='none'
                        autoCorrect={false}
                    />

                    {/* input de contrasenia */}
                    <Text style={SignupStyles.label}> contrasenia </Text>
                    <TextInput
                        placeholder="*****"
                        placeholderTextColor='rgba(255,255,255,0.6)'
                        underlineColorAndroid='white' //esto se aplico solo para android, es la linea blanca
                        secureTextEntry //para ocultar la contrasenia

                        // como vamos a aplicarvarios estilos como android y IOS 
                        style={[
                            SignupStyles.inputField,
                            (Platform.OS === 'ios') && SignupStyles.inputFieldIOS //esta es la linea blanca
                        ]}
                        selectionColor='violet' //para cuando se selecciona el color

                        //TODO: onchange, value
                        onChangeText={ value => handleChange(value,'pass') }
                        // value={pass}
                        // onChangeText={ (value)=> onChange(value,'password') }
                        // onSubmitEditing = { onLogin }


                        autoCapitalize='none'
                        autoCorrect={false}
                    />


                    {/* <Text>Nombre</Text>
                    <TextInput
                    style={[
                        SignupStyles.inputField,
                        (Platform.OS === 'ios') && SignupStyles.inputFieldIOS //esta es la linea blanca
                    ]}
                        placeholder='Nombre'
                        // onChangeText={ (value)=> onChange(value,'nombre') }
                        // onChangeText={ handleChange }
                    ></TextInput> */}

{/* boton paa ingresar */}
                    <View style={SignupStyles.buttonContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={SignupStyles.button}
                            // onPress = { onLogin}
                            onPress = { handleSubmit }
                            
                        >
                            <Text style={SignupStyles.buttonText}> Ingresar </Text>
                        </TouchableOpacity>
                    </View>

                    {/* para registrarse */}
                    <View style={SignupStyles.newUserContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={SignupStyles.button}
                            // esto de abajo es para destruir la pantalla y con ello el estado de los campos para que no haya conflicto, se hace un boton para que se pueda navegar hacia atras
                            onPress={ ()=>navigator.replace('FormRegisterScreen')
                            }
                        >
                            <Text style={SignupStyles.buttonText}> Registrarse </Text>
                        </TouchableOpacity>
                    </View>
                    {/* <TouchableOpacity
                            activeOpacity={0.8}
                            value='violet'
                            // style={SignupStyles.buttonReturn}
                            // esto de abajo es para destruir la pantalla y con ello el estado de los campos para que no haya conflicto, se hace un boton para que se pueda navegar hacia atras
                            // onPress={ ()=> handleName('violet') }
                            // style={{backgroundColor:nameC}}
                    >
                        <Text style={SignupStyles.buttonText}>click</Text>
                    </TouchableOpacity> */}
                </View>
            </KeyboardAvoidingView>
        </>
    )
}