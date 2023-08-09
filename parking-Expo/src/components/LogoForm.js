import React from 'react'
import { View, Image } from 'react-native'

export const LogoForm = () => {
  return (
    <View
        style={{
            alignItems:'center'
        }}
    >
        <Image
            source={require('../assets/carro-logo2.png')}
            style={{
                width:180,
                height:180,
                // top:70,
                // backgroundColor:'violet'
            }}
        >

        </Image>
    </View>
  )
}
