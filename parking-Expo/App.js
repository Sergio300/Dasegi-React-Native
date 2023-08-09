import { NavigationContainer } from '@react-navigation/native';
import { StackNavigatorLogin } from './src/navigator/StackNavigatorLogin';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {FormRegisterScreen} from './src/screens/FormRegisterScreen';
import  {FormSingupScreen}  from './src/screens/FormSingupScreen';

//context
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (
    // <FormSingupScreen></FormSingupScreen>
    // <FormRegisterScreen></FormRegisterScreen>
    // <Text>Hola</Text>
    // <NavigationContainer>
    //   <StackNavigatorLogin></StackNavigatorLogin>
    // </NavigationContainer>

    //intentar mover arriba la navegationContainer y abajo el provider
      <NavigationContainer>
        <AuthProvider>
          <StackNavigatorLogin></StackNavigatorLogin>
        </AuthProvider> 
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
