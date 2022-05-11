import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Dimensions  } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import  {LoginForm}  from './components/loginForm';
import {SafeAreaProvider } from 'react-native-safe-area-context'
export default function App() {



  return (
        <View style={styles.container}>
          <LoginForm/>
          <StatusBar style="auto" />
        </View>
    

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gold',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
