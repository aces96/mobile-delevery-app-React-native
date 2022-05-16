import * as React from 'react'
import { StyleSheet, View, Linking, Image } from "react-native"
import { Layout, Button, Text, Input, useTheme } from '@ui-kitten/components';
import { useFonts } from "expo-font";
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




export const MealSection = ()=>{

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
    
    return (
        <Layout style={{height: '100%', width: '100%', backgroundColor: 'black'}}>
            <Layout style={{height: 50, width: '100%', justifyContent: 'center', alignItems: 'center'}}>

            </Layout>

        </Layout>
    )

}