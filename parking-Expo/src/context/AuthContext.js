import React, {  createContext, useEffect, useState } from 'react';
import { getUsers,saveUser,updateUserApi } from '../../api';

const AuthContext = createContext();
// const initialName = '';
// const initialText = '';

// podemos poner el valor inicial en el otro arreglo y ver que sucede
const userContext = {
    nameBD:'',
    lastNameBD:'',
    emailUserBD:'',
    passUserBD:'',
    depaBD:'',
    idLugarBD:'',
}

const AuthProvider =({ children })=>{

    const [login,setLogin] = useState(false); //aqui deberioa el initialText como variable
    // const [texts,setTexts] = useState(initialText);
    const [emailBD, setEmailBD] =  useState([])
    const [ userRegister, setUserRegister] =  useState(false)
    const [userBD, setUserBD] = useState(userContext);
    //metodos para validar
    const validarCorreo = async (valor)=>{

        // console.log('tipo dato lugar')
        // console.log(typeof(emailBD))
        const data = await getUsers()
        console.log(data)
        // console.log(data[1])
        // console.log(typeof(data))
        setEmailBD(data)
        console.log('entra al autshta')
        
        for (let propiedad in emailBD){
            console.log('entra al for')
            // console.log(emailBD[propiedad])
            if(valor.email === emailBD[propiedad].CORREO && valor.pass == emailBD[propiedad].CONTRA){
                setLogin(true)
                // setEmailUser(emailBD[propiedad].CORREO)
                // setEmailUser(emailBD[propiedad].CONTRA)
                // setEmailUser(emailBD[propiedad].NOMBRE)
                setUserBD(emailBD[propiedad]);
            }
            else{
                setLogin(false)
            }
        //   console.log(data[correo].Id_Lugares)

        // setPlace(data[propiedad].Id_Lugares)
        }

        // console.log(typeof(place))
        // console.log('un solo correo')
        // console.log(emailBD)
        // if(e.target.value === 'red'){
        // if(valor === 'gilberto@gmail.com'){
        //     setLogin(true);
        //     // setTexts = 
        // }
        // else{
        //     setLogin(false);
            
        // }
    };

    
    

    const crearCuenta = async (nuevoCorreo) => {
        // console.log(nuevoCorreo.depa)

// console.log('tipo dato lugar')
        // console.log(typeof(emailBD))
        // const data = await getUsers()
        // console.log(data)
        // console.log(data[1])
        // console.log(typeof(data))
        // setEmailBD(data)
        console.log('entra al crearCuent')
        console.log(nuevoCorreo)
        
        // for (let valor in nuevoCorreo){
            console.log('entra al for')
            // console.log(emailBD[propiedad])
            if(nuevoCorreo.email=='' && nuevoCorreo.passw == '' && nuevoCorreo.nombre == '' && nuevoCorreo.apellido=='' && nuevoCorreo.depa==''){
                
                setUserRegister(false)
                
                console.log('valores vacios')
                return
            }
            else{
                
                setUserRegister(true)
                // setUserBD(nuevoCorreo[valor]);
                console.log('datos correctos')
                
                setUserBD(nuevoCorreo)
                console.log(userBD)
                const res = await saveUser(nuevoCorreo)
                // setUserBD(nuevoCorreo)
                console.log(res)
            }
        //   console.log(data[correo].Id_Lugares)

        // setPlace(data[propiedad].Id_Lugares)
        // }

        // setLogin(false)
    }

    const updateUser=(id,formUpdate)=>{
        // const res = saveUser(formUpdate) 
        updateUserApi(id,formUpdate)
        setUserBD()
    }


    const logout=(estado)=>{

        if(estado=='logout')
        {
            setLogin(false);
        }
    }

    useEffect(()=>{
        
        validarCorreo()
        crearCuenta()
        

    },[])

    // datos que vamos a enviar
    const data = { 
        login,
        validarCorreo,
        crearCuenta,
        logout,
        userBD,
        userRegister,
        setLogin,
        updateUser
    };

    return <AuthContext.Provider value={ data }>{children}</AuthContext.Provider>
}

export { AuthProvider };
export default AuthContext;