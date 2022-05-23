import * as React from 'react'
import { StyleSheet, ScrollView, Linking, Image, Dimensions } from "react-native"
import { Layout, Button, Text, Input, useTheme, Modal } from '@ui-kitten/components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather'
import axios from 'axios';
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





export const Cart = ()=>{

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
            flex: 1,
            backgroundColor: 'pink',
            alignItems: 'center'
        },
        mealCont:  {
            width: '100%',
            height: 90,
            backgroundColor: 'black',
            flexDirection: 'row',
            marginBottom: 10
        }
    })


    return(

        <Layout style={styles.container}>
            <Layout style={styles.mealCont}>
                <Layout style={{width:'25%', height: '100%', borderWidth: 2, borderColor: 'black'}}>

                </Layout>
                <Layout style={{width: '45%', height: '100%', borderWidth: 2, borderColor: 'black', alignItems: 'center', justifyContent: 'center'}}>
                    <Text category='h5' style={{fontFamily: 'Roboto_700Bold'}}>MEAL 1</Text>
                    <Text category='s1' style={{fontFamily: 'Roboto_700Bold'}}>DESCRIPTION MEAL1</Text>

                </Layout>
                <Layout style={{width: '35%', height: '100%', borderWidth: 2, borderColor: 'black'}}>
                    <Layout style={{height: '60%', alignItems: 'center', justifyContent: 'center'}}>
                        <Text category='h6' style={{fontFamily: 'Roboto_700Bold'}}>150DH</Text>
                    </Layout>
                    <Layout style={{height: '40%', alignItems: 'center', justifyContent: 'center'}}>
                        <Text category='s1' style={{fontFamily: 'Roboto_700Bold'}}>QT: 2</Text>
                    </Layout>
                </Layout>

            </Layout>

            <Button text size='small' style={{backgroundColor: '#49FF00', width: '50%'}}>Submit</Button>

        </Layout>

    )
}