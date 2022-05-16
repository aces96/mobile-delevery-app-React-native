import { StyleSheet, View, Linking } from "react-native"
import { useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context'
import { ApplicationProvider, Layout, Button, Text, Input, useTheme } from '@ui-kitten/components';
import { useFonts } from "expo-font";
import { withStyles } from '@ui-kitten/components';
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
    const theme = useTheme()
    


    if(!fontsLoaded){
        return null
    }

    const styles =   StyleSheet.create(
        {
            container: {
                width: '100%',
                margin: 'auto',
                height: '100%',
                backgroundColor: 'white'
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
                width: '90%',
                margin: 'auto',
                color: 'black',
                marginBottom: 10
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
                style={styles.input}
                />
                <Input
                placeholder='password'
                label='Password'
                status= 'primary'
                style={styles.input}
                />
                <Layout style={{height: 20,width: '90%', justifyContent: 'flex-end', marginBottom: 10}}>
                    <Text onPress={() => Linking.openURL('http://google.com')} category='s2' style={{ color: 'blue', textAlign: 'right'}}>
                        Forgot Password ?
                    </Text>
                </Layout>
                <Button appearance='filled'   status='success' size='small' style={{width: "70%" , height: "10%", backgroundColor: theme["color-success-500"]}}>Submit</Button>
                {/* <Layout style={{height: 20,width: '90%', justifyContent: 'flex-end', marginBottom: 10}}>
                    <Text onPress={() => Linking.openURL('http://google.com')} category='s2' style={{ color: 'blue', textAlign: 'right'}}>
                        Register ?
                    </Text>
                </Layout> */}
                </Layout>



            
        </SafeAreaView>
        
    )
}