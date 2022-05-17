import * as React from 'react'
import { StyleSheet, View, Linking, Image } from "react-native"
import { Layout, Button, Text, Input, useTheme } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Feather'
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



export const SearchBar = ()=>{

    const styles = StyleSheet.create({
        container: {
            marginTop: '25%',
            height:  100 ,
            width: '100%',
            backgroundColor: '0,0,0,O',
            alignItems: 'center',
            }
    })
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

    const RenderIcon = ()=>{
        return(
        <Icon
        name='search'/>
        )
    }

    return ( 
        <Layout style={styles.container}>
            <Text style={{color: 'white'}}>GET STARTED !</Text>
            <Button appearance='filled'   status='success' size='small' style={{width: "70%" , height: "10%", backgroundColor: '#95CD41', marginTop: 15}}>Submit</Button>


        </Layout>

    )
}