import { StyleSheet, View } from "react-native"
import { useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context'
import { ApplicationProvider, Layout, Button, Text, Input } from '@ui-kitten/components';
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

    let [text, setText] = useState('yeaah')


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
                alignItems: 'center',
                marginBottom: 5
            },
            title: {
                fontFamily: 'Roboto_700Bold',
                fontSize: 500
            },
            inputContainer: {
                height: '70%',
                width: '100%',
                display: 'flex',
                alignItems: 'center'

            },
            input: {
                width: '80%',
                height: 50,
                margin: 'auto',
            }
            
        }

    )

    return(
        <SafeAreaView style= {styles.container}>
                <Layout style={{height: 100, justifyContent: 'center', alignItems: 'center', marginTop: 30, marginBottom: 10 }}>
                    <Text category='h2' style={{fontFamily: 'Roboto_700Bold', color: '#2155CD', fontWeight: "100", marginBottom: 10}}>LOGIN</Text>
                    <Text category='s2' style={{fontFamily: 'Roboto_700Bold', color: '#2155CD', fontWeight: "100"}}>WELCOME BACK !</Text>
                </Layout>
                <Layout style={{height: 300, justifyContent: 'center', alignItems: 'center'}}>
                <Input
                placeholder='email@email.com'
                label='Email'
                status= 'primary'
                />
                <Input
                placeholder='password'
                label='Password'
                status= 'primary'
                style={{color: 'black', marginBottom: 10}}
                />
                <Button status='success' size='small' style={{width: "70%" , height: "8%", padding: 0}}>Submit</Button>
                </Layout>



            
        </SafeAreaView>
        
    )
}