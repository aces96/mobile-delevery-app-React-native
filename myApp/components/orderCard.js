import * as React from 'react'
import { StyleSheet, View, Linking, Dimensions  } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'
import { Layout, Button, Text, Input, useTheme } from '@ui-kitten/components';
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { updateVisibily } from '../assets/redux/orderModal.slice';
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




export const OrderCard = ()=>{

    const dispatch = useDispatch()
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


    const styles = StyleSheet.create({
        container: {
            height: 100,
            width: '95%',
            alignItems: 'center',
            backgroundColor: '#EFEFEF',
            borderWidth: 1,
            borderColor: '#185ADB',
            borderRadius: 20,
            elevation: 7,
            padding: 5,
            marginBottom: 10
        }
    })

    return (

        <Layout style={styles.container}>
            <Layout style={{height: '30%', width: '95%',  flexDirection: 'row', justifyContent: 'space-between', padding: 5, backgroundColor:'rgba(0,0,0,0)'}}>
                <Text style={{fontFamily: 'Roboto_700Bold'}}>FullName:</Text>
                <Text style={{fontFamily: 'Roboto_700Bold'}}>Achraf Esraidi</Text>

            </Layout>

            <Layout style={{height: '30%', width: '95%', flexDirection: 'row', padding: 5, justifyContent: 'center',backgroundColor:'rgba(0,0,0,0)'}}>
                <Text category='s1' style={{fontFamily: 'Roboto_700Bold'}}>Number of Meals: 3</Text>
            </Layout>

            <Layout style={{height: '35%', width: '95%', marginTop: 5, alignItems: 'center',backgroundColor:'rgba(0,0,0,0)'}}>
                <Button onPress={()=>dispatch(updateVisibily(true))} size='small' style={{width: '50%', height: '100%'}}>SHOW MORE</Button>

            </Layout>

        </Layout>


    )
}