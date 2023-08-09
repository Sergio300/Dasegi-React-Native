import React,{ useContext, useEffect, useState }  from 'react'
import { View, Text, TextInput,TouchableOpacity, Platform, KeyboardAvoidingView, Keyboard }  from 'react-native'
import { CommonActions, useNavigation } from '@react-navigation/native' //usa al final core, pero hay que probarlo
import { BackgroundForm } from '../components/BackgroundForm';
import { LogoForm } from '../components/LogoForm';

//temas
import { SignupStyles } from '../theme/SignupTheme'

//hooks
import { useForm } from '../hooks/useForm';

//context
import AuthContext from '../context/AuthContext';

// inicializacion de variables
const initialForm ={
    nombre: '',
    apellido: '',
    correo: '',
    contra: '',
    departamento: '',
    idLuga:''
}



export const FormRegisterScreen = () => {

    const navigator = useNavigation();

    const [formRe, setFormRe] = useState(initialForm);
    const { login, crearCuenta, userBD, userRegister } = useContext( AuthContext )
    // const { login, crearCuenta } = useContext( AuthContext )

    // const { name,lastName,email,password,dep, onChange } = useForm({
    //     name:'',
    //     lastName:'',
    //     email:'',
    //     password:'',
    //     dep:''
    // })

    const onLogin =()=>{
        // console.log({name, lastName, email, password, dep});
        console.log(login)
        Keyboard.dismiss();  //para cuando presione el boton ocultar el teclado
    }

    //manejar todos los estados
    const handleChange = (value,field) => {
        setFormRe({
          ...formRe,
          [field]: value
        });
      };
    
      const handleSubmit = () => {
        console.log(formRe)
        crearCuenta(formRe)

        console.log(login)


        if(userRegister){
            // navigator.replace('HomeScreen')
            navigator.navigate('NoticePrivacyScreen')
            // (formEd)
        }
        else{
            alert('completa los campos del formulario')
        }
      }

    //   const noticePrivacy =()=>{
    //     navigator.navigate('NoticePrivacyScreen')
    //   }

    // useEffect(()=>{
        
    //     console.log(userBD)
    // },[])

    return(
        <>
            <BackgroundForm></BackgroundForm>

            <KeyboardAvoidingView
                style={{ flex:1 }}
                behavior={ (Platform.OS ==='ios' ? 'padding' : 'height') } 
                //es para que cuando presiones el teclado no tape los botones, en android no es necesario lo hace bien
            >        

                <View style={SignupStyles.formContainer}>
                    {/* <LogoForm></LogoForm> */}

                    <Text
                        style={ SignupStyles.title }
                    >Registro</Text>

                    <Text style={SignupStyles.label}> Nombre: </Text>
                    <TextInput
                        placeholder="Nombre"
                        placeholderTextColor='rgba(255,255,255,0.6)'
                        // keyboardType='email-address'
                        underlineColorAndroid='white'
                         //esto se aplico solo para android, es la linea blanca

                        // como vamos a aplicarvarios estilos como android y IOS 
                        style={[
                            SignupStyles.inputField,
                            (Platform.OS === 'ios') && SignupStyles.inputFieldIOS 
                            //esta es la linea blanca
                        ]}
                        selectionColor='violet' 
                        //para cuando se selecciona el color

                        //TODO: onchange, value
                        // onChangeText={ (value)=> onChange(value,'name')}
                        // value={name}
                        // onSubmitEditing = { onLogin }

                        onChangeText={ (value) => handleChange(value,'nombre')}


                        autoCapitalize='none'
                        autoCorrect={false}
                    />

                    {/* apellido */}
                    <Text style={SignupStyles.label}> Apellido: </Text>
                    <TextInput
                        placeholder="Apellido"
                        placeholderTextColor='rgba(255,255,255,0.6)'
                        // keyboardType='email-address'
                        underlineColorAndroid='white'
                         //esto se aplico solo para android, es la linea blanca

                        // como vamos a aplicarvarios estilos como android y IOS 
                        style={[
                            SignupStyles.inputField,
                            (Platform.OS === 'ios') && SignupStyles.inputFieldIOS 
                            //esta es la linea blanca
                        ]}
                        selectionColor='violet'
                         //para cuando se selecciona el color

                        //TODO: onchange, value
                        // onChangeText={ (value)=> onChange(value,'lastName')}
                        // value={ lastName }
                        // onSubmitEditing = { onLogin }
                        onChangeText={ (value) => handleChange(value,'apellido')}


                        autoCapitalize='none'
                        autoCorrect={false}
                    />

                    {/* correo */}
                    <Text style={SignupStyles.label}> Correo electrónico </Text>
                    <TextInput
                        placeholder="correo electrónico"
                        placeholderTextColor='rgba(255,255,255,0.6)'
                        keyboardType='email-address'
                        underlineColorAndroid='white'
                         //esto se aplico solo para android, es la linea blanca


                        // como vamos a aplicarvarios estilos como android y IOS 
                        style={[
                            SignupStyles.inputField,
                            (Platform.OS === 'ios') && SignupStyles.inputFieldIOS 
                            //esta es la linea blanca
                        ]}
                        selectionColor='violet'
                         //para cuando se selecciona el color

                        //TODO: onchange, value
                        // onChangeText={ (value)=> onChange(value,'email')}
                        // value={email}
                        // onSubmitEditing = { onLogin }

                        onChangeText={ (value) => handleChange(value,'correo')}


                        autoCapitalize='none'
                        autoCorrect={false}
                    />

                    {/*====================== input de contrasenia ======================*/}
                    <Text style={SignupStyles.label}> Contraseña </Text>
                    <TextInput
                        placeholder="Contraseña"
                        placeholderTextColor='rgba(255,255,255,0.6)'
                        underlineColorAndroid='white' 
                        //esto se aplico solo para android, es la linea blanca
                        secureTextEntry 
                        //para ocultar la contrasenia

                        // como vamos a aplicarvarios estilos como android y IOS 
                        style={[
                            SignupStyles.inputField,
                            (Platform.OS === 'ios') && SignupStyles.inputFieldIOS
                             //esta es la linea blanca
                        ]}
                        selectionColor='violet'
                         //para cuando se selecciona el color

                        //TODO: onchange, value
                        // onChangeText={ (value)=> onChange(value,'password') }
                        // value={ password }
                        // onSubmitEditing = { onLogin }

                        onChangeText={ (value) => handleChange(value,'contra')}



                        autoCapitalize='none'
                        autoCorrect={false}
                    />

                    {/* ====================== input de departamento ======================*/}
                    <Text style={SignupStyles.label}> Departamento </Text>
                    <TextInput
                        placeholder="Departamento"
                        placeholderTextColor='rgba(255,255,255,0.6)'
                        underlineColorAndroid='white'
                         //esto se aplico solo para android, es la linea blanca
                        // secureTextEntry //para ocultar la contrasenia
                        keyboardType='numeric'
                        maxLength={3}

                        // como vamos a aplicarvarios estilos como android y IOS 
                        style={[
                            SignupStyles.inputField,
                            (Platform.OS === 'ios') && SignupStyles.inputFieldIOS 
                            //esta es la linea blanca
                        ]}
                        selectionColor='violet'
                         //para cuando se selecciona el color

                        //TODO: onchange, value
                        // onChangeText={ (value)=> onChange(value,'dep') }
                        // value={ dep }
                        // onSubmitEditing = { onLogin }

                        onChangeText={ (value) => handleChange(value,'departamento')}



                        autoCapitalize='none'
                        autoCorrect={false}
                    />


                    {/*====================== botones ======================*/}
                    <View style={SignupStyles.buttonContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={SignupStyles.button}
                            // onPress = { onLogin}
                            onPress = { handleSubmit }
                            // onPress={ ()=>navigator.replace('NoticePrivacyScreen') }
                            // onPress={ noticePrivacy }
                            
                        >
                            <Text style={SignupStyles.buttonText}> Ingresar </Text>
                        </TouchableOpacity>
                    </View>

                    {/* para registrarse */}
                    <View style={SignupStyles.newUserContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            // style={SignupStyles.buttonReturn}
                            style={SignupStyles.button}
                            // esto de abajo es para destruir la pantalla y con ello el estado de los campos para que no haya conflicto, se hace un boton para que se pueda navegar hacia atras
                            onPress={ ()=>navigator.replace('FormSingupScreen')
                            }
                        >
                            <Text style={SignupStyles.buttonText}> Regresar </Text>
                        </TouchableOpacity>
                    </View>

                    {/* aca es de prueba */}
                    {/* <TouchableOpacity
                            activeOpacity={0.8}
                            value='violet'
                            // style={SignupStyles.buttonReturn}
                            // esto de abajo es para destruir la pantalla y con ello el estado de los campos para que no haya conflicto, se hace un boton para que se pueda navegar hacia atras
                            onPress={ ()=> handleName }
                            style={{backgroundColor:nameC}}
                    >
                        <Text style={SignupStyles.buttonText}>click </Text>
                    </TouchableOpacity> */}
                </View>
            </KeyboardAvoidingView>
        </>
    )
}

