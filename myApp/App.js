import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Dimensions  } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import  {LoginForm}  from './components/loginForm';
import {SafeAreaProvider } from 'react-native-safe-area-context'
export default function App() {



  return (
    <SafeAreaProvider>
      <ApplicationProvider {...eva} theme={eva.light}>
        <View style={styles.container}>
          <LoginForm/>
          <StatusBar style="auto" />
        </View>

      </ApplicationProvider>

    </SafeAreaProvider>
      
        
    

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
