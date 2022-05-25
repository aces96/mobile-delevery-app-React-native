import * as React from 'react'
import { StyleSheet, ScrollView, Linking, Image, Dimensions } from "react-native"
import { Layout, Button, Text, Input, useTheme, Modal } from '@ui-kitten/components';
import { useEffect, useState } from 'react';
import Storage from '../assets/storage/storage';
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

    let meals = []
    let payload = []

    const [repas, setRepas] = useState([]) 

    useEffect(()=>{
        

        const getMeals = async ()=>{
            const storage = new Storage
            payload = await storage.getData()
            
            // console.log(payload);

            payload.map(e=>{
                meals.push(JSON.parse(e[1]))
                console.log(meals.length);
            })

            setRepas(oldArr => [...oldArr, meals])
            console.log(repas[0])    
            
        }

        getMeals()

    }, [])

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

            {repas[0].map(e=>{
                return (
                    <Layout style={styles.mealCont}>
                        
                <Layout style={{width:'25%', height: '100%', borderWidth: 2, borderColor: 'black'}}>

                </Layout>

                <Layout style={{width: '45%', height: '100%', borderWidth: 2, borderColor: 'black', alignItems: 'center', justifyContent: 'center'}}>
                    <Text category='h5' style={{fontFamily: 'Roboto_700Bold'}}>{e.meal.name}</Text>
                    <Text category='s1' style={{fontFamily: 'Roboto_700Bold'}}>{e.meal.description}</Text>
                </Layout>

                <Layout style={{width: '35%', height: '100%', borderWidth: 2, borderColor: 'black'}}>
                <Layout style={{height: '60%', alignItems: 'center', justifyContent: 'center'}}>
                    <Text category='h6' style={{fontFamily: 'Roboto_700Bold'}}>{e.meal.price * e.quantity}DH</Text>
                </Layout>
                <Layout style={{height: '40%', alignItems: 'center', justifyContent: 'center'}}>
                    <Text category='s1' style={{fontFamily: 'Roboto_700Bold'}}>{e.quantity}</Text>
                </Layout>
                </Layout>

            </Layout>
                )

            })}
                    

                
                
            

            <Button text size='small' style={{backgroundColor: '#49FF00', width: '50%'}}>Submit</Button>

        </Layout>

    )
}