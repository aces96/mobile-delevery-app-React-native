import * as React from 'react'
import { StyleSheet, ScrollView, Linking, Image, Dimensions } from "react-native"
import { Layout, Button, Text, Input, useTheme, Modal } from '@ui-kitten/components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather'
import axios from 'axios';
import faceImage from '../assets/face.jpg'
import { useFonts } from "expo-font";
import { ImageBackground } from 'react-native';
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




export const ProfilImage = ()=>{

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
            height: '40%',
            width: '100%',
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center'
        },
        image: {
            height: 120,
            width: 120,
            backgroundColor: 'white',
            borderRadius: 130/2,
            border: '1px solid blue'
        }, 
        profilInfo:  {
            height: 80,
            width: '100%',
            backgroundColor: 'white',
            justifyContent: 'center'
        }
    })


    return (
        <Layout style={styles.container}>

            <Layout style={styles.image}>
            <ImageBackground source={faceImage} imageStyle={{borderRadius: 130/2}} style={{height: '100%',width: '100%', overflow: 'hidden'}} resizeMode= 'contain'>
            </ImageBackground>
            </Layout>

            <Layout style={styles.profilInfo}>
                <Text category='h6' style={{fontFamily: 'Roboto_700Bold', textAlign: 'center'}}>
                    Achraf Esraidi
                </Text>
                <Text category='c1' style={{fontFamily: 'Roboto_700Bold', textAlign: 'center'}}>
                    esraidi12@gmail.com
                </Text>
            </Layout>


        </Layout>
    )
}