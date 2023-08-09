import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon  from 'react-native-vector-icons/Ionicons';

//data
const menuItems =[
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    components: 'Animation101Screen'
  },
  {
    name: 'pedro',
    icon: 'cube-outline',
    components: 'ajam'
  }
]
const Item = ({ item}) => (
  <View >
    <Text >{item.name}</Text>
    <Text >{item.icon}</Text>
    <Text >{item.components}</Text>
  </View>
);

export const NotificationsScreen = () => {

  const renderMenuItem = ({ name })=>{
    // return (
      <view>
        <Text>{ name } </Text>
      </view>
    // )
  }

  const itemSeparator=()=>{

    const { top } = useSafeAreaInsets();

    return(
      <View
        style={{
          borderBottomWidth:2,
          opacity:0.4,
          marginVertical:8
        }}
      >
      </View>
    )
  }
  return (
    <View style={{
      flex:1, 
      marginHorizontal:20,
      // marginTop:  20

      }}>
      <FlatList
        data={ menuItems}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.icon}
        ItemSeparatorComponent = { itemSeparator }
      />
    </View>
  )
}



/*

para en noch
const {Top} = useSafeAreaInsets(); //importar el safe area es para el nocht
<style = {{ marginTop: Top + 20}}
*/