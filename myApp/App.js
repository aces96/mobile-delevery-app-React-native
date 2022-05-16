import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Dimensions  } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import  {LoginForm}  from './components/loginForm';
import {SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native';
import { MealScreen } from './components/meal.screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage } from './containers/home';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { MealCard } from './components/meal.card';
import { Provider } from 'react-redux'
import store from './assets/redux/store';


export default function App() {


  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider {...eva} theme={eva.light} >
            <Provider store={store}>
              <Stack.Navigator initialRouteName='meal'>
                  <Stack.Screen name='meal' component={MealScreen}/>
                  <Stack.Screen name='home' component={HomePage}/>
                  <Stack.Screen name='login' component={LoginForm}/>
              </Stack.Navigator>
            </Provider>
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
