import React, { useState } from 'react'

export const useStateCar = () => {
  
  const [car1,setCar1] = useState('#900')
  const [car2,setCar2] = useState('#900')
  const [car3,setCar3] = useState('#900')
  const [car4,setCar4] = useState('#900')
  const [car5,setCar5] = useState('#900')
  const [car6,setCar6] = useState('#900')
  const [car7,setCar7] = useState('#900')

  const stateCar =()=>{
    if(carOcupado == '#900'){
      Alert.alert(
        'Mensaje de alerta',
        'Espacio no disponible',
        [
          {
            text:'Cancelar',
            onPress:()=> console.log('cancelado'),
            style:'cancel'
          },
          {
            text:'Desocupar?',
            onPress:()=> setcarOcupado('green')
          }
        ]
    
      )
    } 
    else{
      Alert.alert(
        'Mensaje de alerta',
        'Espacio disponible',
        [
          {
            text:'Cancelar',
            onPress:()=> setcarOcupado('cancelar'),
            style:'cancel'
          },
          {
            text:'Ocupar?',
            onPress:()=> setcarOcupado('#900')
          }
        ]
    
      )
    }
    
  }

  return{
    
  }
}
