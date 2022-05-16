import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Dimensions  } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import  {LoginForm}  from './components/loginForm';
import {SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage } from './containers/home';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export default function App() {


  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider {...eva} theme={eva.light} >
            <Stack.Navigator initialRouteName='home'>
                <Stack.Screen name='home' component={HomePage}/>
                <Stack.Screen name='login' component={LoginForm}/>
            </Stack.Navigator>
          </ApplicationProvider>
      </SafeAreaProvider>
    </NavigationContainer>

      
        
    

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
