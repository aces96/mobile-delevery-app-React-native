import * as React from 'react'
import { StyleSheet, View, Linking, Image,ImageBackground } from "react-native"
import { Layout, Button, Text, Input, useTheme } from '@ui-kitten/components';
import  image  from '../assets/bgrd.jpg';
import { useFonts } from "expo-font";
import { SearchBar } from './home.searchBar';
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


export const HomeHeader = ()=>{
    

    const theme = useTheme()
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
        <Layout style={{height: '100%'  , width: '100%', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, overflow: 'hidden'}}>
            <ImageBackground source={image} style={{flex: 1}} resizeMode= 'stretch'>
            <Layout style={{backgroundColor: '0,0,0,0', marginTop: 100}} >
                <Text category='h1' style={{fontFamily: 'Roboto_700Bold', color: '#F0A500', fontWeight: "900", textAlign: 'center'}}>
                Fastest Delivery
                </Text>
            </Layout>
            <Layout style={{backgroundColor: '0,0,0,0'}}>
                <Text category= 'h1' style={{color: theme["color-success-500"], textAlign: 'center'}} >
                &
                </Text>
            </Layout>
            <Layout style={{backgroundColor: '0,0,0,0'}}>
                <Text category= 'h1' style={{fontFamily: 'Roboto_700Bold', color: '#F0A500', fontWeight: "900", textAlign: 'center'}} >
                Tastiest Food
                </Text>
            </Layout>
            <Layout style={{backgroundColor: '0,0,0,0'}}>
                <Text category= 'c1' style={{fontFamily: 'Roboto_700Bold', color: '#E6D5B8', fontWeight: "900", textAlign: 'center', marginTop: 10}} >
                your favorite foods delivered fast at your door 
                </Text>
            </Layout>

            <SearchBar/>

            </ImageBackground>
            
        </Layout>

    )
}