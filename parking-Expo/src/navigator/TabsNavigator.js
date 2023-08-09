import React from 'react';
//del material boton
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//pantallas
import { HomeScreen } from '../screens/HomeScreen';
import { NotificationsScreen } from '../screens/NotificationsScreen';
import { ProfileScreen } from '../screens/ProfileScreen';

//iconos
import Icon  from 'react-native-vector-icons/Ionicons';
import { StackNavigatorLogin } from './StackNavigatorLogin';

const Tab = createBottomTabNavigator();

export const TabsNavigator = ()=> {
  return (
    <Tab.Navigator
    sceneContainerStyle={{
        backgroundColor:'white'
    }}

    screenOptions={({route}) =>({
      // tabBarActiveTintColor: colores.primary,
      tabBarStyle:{
        borderTopColor:'green',
        borderTopWidth:0,
        elevation:0
      },

      // tabBarIcon:(props) => lo deestructuramos {
      tabBarIcon:({color,focused,size}) => {

        console.log(route.name) //solo vemos en que ruta estamos
        let iconName = '';
        
        switch( route.name){
          case 'Home':
            console.log("hola")
            iconName='home-outline'
            break;
            case 'NotificationsScreen':
              iconName='notifications-outline'
              console.log("pagina 2")
            break;
          case 'ProfileScreen':
            iconName='person-outline'
            break;
        }
        
        console.log(iconName)
        return <Icon name={iconName} size={30} color={color}></Icon>
      },
    })}
    >
      <Tab.Screen name="Home" options={{ title:'Inicio' }} component={ HomeScreen } />
      <Tab.Screen name="NotificationsScreen" options={{ title:'Notificaciones' }} component={ NotificationsScreen } />
      <Tab.Screen name="ProfileScreen" options={{ title:'Perfil' }} component={ ProfileScreen } />
      {/* <Tab.Screen name="login" component={ StackNavigatorLogin } /> */}
      {/* <Stack.Screen name="FormSingupScreen" options={{title: "Inicio"}} component={ FormSingupScreen } /> */}
    </Tab.Navigator>
  );
}