import React, { useContext, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Alert, Button, Modal, CheckBox, StyleSheet } from 'react-native'
import { getUsers } from '../../api';
//iconos
import Icon from 'react-native-vector-icons/Ionicons';
import AuthContext from '../context/AuthContext';


const initialCar ={
  car1 : '#900',
  car2 : 'green',
  car3 : '#900',
  car4 : '#900',
  car5 : '#900',
  car6 : '#900',
  car7 : '#900',
}

const initialPlace ={
  place1 : '',
  place2 : '',
  place3 : '',
  place4 : '',
  place5 : '',
  place6 : '',
  place7 : '',
}


export const HomeScreen = () => {
  
  const [isVisible, setIsVisible] = useState(false)
  const [stateCar,setStateCar] = useState(initialCar)
  const { login, crearCuenta, userBD } = useContext( AuthContext )
  
  const date = new Date()
  const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ];
  const [hour, minutes, seconds] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];

  const fecha =`Estas ocupando el lugar el dia ${day}/${month}/${year} - ${hour}:${minutes}:${seconds}`
  
  
  const handleClickCar=(value,field)=>{

    console.log(stateCar)
    console.log(field)
    console.log(value)
    if(value === '#900'){
      Alert.alert(
        'Mensaje de alerta',
        'Espacio no disponible',
        [
          {
            text:'Cancelar',
            onPress:()=>{
               setStateCar({
              ...stateCar,
              [field]:'#900'
            })
          },
            style:'cancel'
          },
          {
            text:'Desocupar?',
            onPress:()=>{
              setStateCar({
             ...stateCar,
             [field]:'green'
               })
              } 
          }
        ]
        )
    }else{
      Alert.alert(
        'Mensaje de alerta','Espacio disponible',
        [{
            text:'Cancelar',
            onPress:()=> setStateCar('cancelar'),
            style:'cancel'
          },
          {
            text:'Ocupar?',
            onPress:()=> {
              setStateCar({
                ...stateCar,
                [field]:'#900'
              })
            }
          }])
        }
  }

  const [place,setPlace]=useState([])

  const loadApi = async()=>{
    // const res = await fetch('http://192.168.100.6:3000/users')
    // const data = await res.json()
    // console.log(data)
    // console.log('entro a la api')

    console.log('tipo dato place')
    console.log(typeof(place))
    const data = await getUsers()
    // console.log(data)
    // console.log(data[1])
    console.log(typeof(data))
    setPlace(data)
    for (let propiedad in place)   {
      console.log(place[propiedad])
      // console.log(data[propiedad].Id_Lugares)
      // setPlace(data[propiedad].Id_Lugares)
    }

    // console.log(typeof(place))
    // console.log(place[0].apellido)
  }

  useEffect(()=>{
    
      loadApi()
      console.log(userBD)
  },[])

  return (
    <View>
      {/* <Text>
          <Icon name="car" size={100} color="#900" />
          <Icon name="car" size={100} color="#900" />
      </Text> */}
      <View 
        style={{
          width:100,
          height:130,
          borderWidth:2
        }}
      >
        <TouchableOpacity
          // value={stateCar.car1}
          onPress={ ()=> handleClickCar(stateCar.car1,'car1') }
          // onPress={ () => setIsVisible(true) }
        >
          <Text
            style={{textAlign:'center'}}
          >
              <Icon name="car" size={100} color= {stateCar.car1} />
          </Text >
          <Text 
            style={{textAlign:'center', fontSize:20}}
            >1</Text>
        </TouchableOpacity>
      </View>

      <View
      style={{
        display:"flex",
        width:100,
        height:130,
        borderWidth:2
      }}>
        <TouchableOpacity
          // value={stateCar.car2}
          onPress={ () => handleClickCar(stateCar.car2,'car2') }
        >
          <Text>
              <Icon name="car" size={100} color={stateCar.car2} />
          </Text>
          <Text style={{fontSize:20, textAlign:'center'}}>2</Text>
        </TouchableOpacity>
      </View>

      <View style={{
          width:100,
          height:130,
          borderWidth:2
        }}>
        <TouchableOpacity
          // value={stateCar.car2}
          onPress={ () => handleClickCar(stateCar.car3,'car3') }
        >
          <Text>
              <Icon name="car" size={100} color={stateCar.car3} />
          </Text>
          <Text style={{textAlign:'center', fontSize:20}}>3</Text>
        </TouchableOpacity>
      </View>

      <View
      style={{
        width:100,
        height:130,
        borderWidth:2
      }}>
        <TouchableOpacity
          // value={stateCar.car2}
          onPress={ () => handleClickCar(stateCar.car4,'car4') }
        >
          <Text><Icon name="car" size={100} color={stateCar.car4} /></Text>
          <Text style={{textAlign:'center'}}>4</Text>
        </TouchableOpacity>
      </View>

      <View
      style={{
        width:100,
        height:130,
        borderWidth:2
      }}>
        <TouchableOpacity
          // value={stateCar.car2}
          onPress={ () => handleClickCar(stateCar.car5,'car5') }
        >
          <Text><Icon name="car" size={100} color={stateCar.car5}/></Text>
          <Text style={{textAlign:'center'}}>5</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          // value={stateCar.car2}
          onPress={ () => handleClickCar(stateCar.car6,'car6') }
        >
          <Text>
              <Icon name="car" size={100} color={stateCar.car6} />
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          // value={stateCar.car2}
          onPress={ () => handleClickCar(stateCar.car7,'car7') }
        >
          <Text>
              <Icon name="car" size={100} color={stateCar.car7} />
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          // value={stateCar.car2}
          onPress={ () => handleClickCar(stateCar.car8,'car8') }
        >
          <Text>
              <Icon name="car" size={100} color={stateCar.car8} />
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          // value={stateCar.car2}
          onPress={ () => handleClickCar(stateCar.car9,'car9') }
        >
          <Text>
              <Icon name="car" size={100} color={stateCar.car9} />
          </Text>
        </TouchableOpacity>
      </View>
     
      
      <Button 
        title="Abrir modal"
        // onPress={ () => setIsVisible(true) }
        onPress={ () => handleVisible() }
            />
      <Modal
        animationType="fade"
        visible={ isVisible }
        transparent={ true }
    >
        {/* Background negro */}
        <View style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            {/* Contenido del modal */}
            <View style={{
                width: 300,
                height: 300,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                shadowOffset: {
                    width: 0,
                    height: 10
                },
                shadowOpacity: 0.25,
                elevation: 10,
                borderRadius: 5
            }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Modal</Text>
                <Text style={{ fontSize: 16, fontWeight: '300', marginBottom: 20 }}>
                  {/* Ocuparas el lugar el dia: {day}/{month}/{year} - {hour} : {minutes} : {seconds} hrs */}
                  { fecha }
                </Text>
                <Button
                  title = 'Aceptar'
                >
                </Button>
                <Button
                    title="Cerrar"
                    onPress={ () => setIsVisible(false) }
                />
            </View>
        </View>
    </Modal>

    {/* <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Do you like React Native?</Text>
      </View> */}

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});

// export default HomeScreen


/*

para hacer la recarga de elementos con animacion

<ScrollView>
  
el view es la vista principal
  <View>
  </View>
</ScrollView>

*/