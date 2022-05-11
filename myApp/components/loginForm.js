import { StyleSheet, View } from "react-native"
import { Surface, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts } from "expo-font";
import * as React from 'react'
import { 
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic 
  } from '@expo-google-fonts/roboto'





export  const LoginForm = ()=>{


    let [fontsLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_100Thin_Italic,
        Roboto_300Light,
        Roboto_300Light_Italic,
        Roboto_400Regular,
        Roboto_400Regular_Italic,
        Roboto_500Medium,
        Roboto_500Medium_Italic,
        Roboto_700Bold,
        Roboto_700Bold_Italic,
        Roboto_900Black,
        Roboto_900Black_Italic 
    })


    if(!fontsLoaded){
        return null
    }

    const styles =   StyleSheet.create(
        {
            container: {
                width: '90%',
                margin: 'auto',
                height: '100%',
                backgroundColor: 'blue'
            },
            titleContainer: {
                width: '100%',
                margin: 'auto',
                height: '15%',
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center'
            },
            title: {
                fontFamily: 'Roboto_700Bold',
            }
            
        }

    )

    return(
        <SafeAreaView style= {styles.container}>
            <Surface style= {styles.titleContainer} >
                <Text style= {styles.title}>heeeey</Text>
            </Surface>
        </SafeAreaView>
        
    )
}