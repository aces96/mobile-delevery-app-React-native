import * as React from 'react'
import { StyleSheet, View, Linking, Image,ImageBackground, Dimensions } from "react-native"
import { Layout, Button, Text, Input, useTheme } from '@ui-kitten/components';
import { useSelector, useDispatch } from 'react-redux';
import { addMeal, update } from '../assets/redux/modal.slice';
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



export const MealCard = (props)=>{

    const dispatch = useDispatch()


    const handleClick = ()=>{



    }


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
            width: '90%',
            margin: 'auto',
            elevation: 10,
            height: 150,
            backgroundColor:'yellow',
            flexDirection: 'row',
            marginBottom: 10
        },
    })

    



    return (
        <Layout style= {styles.container}>
            <Layout style={{width: '35%', height: '100%', backgroundColor:'red'}}>
                <ImageBackground style={{flex: 1}}>
                    <Text>hhh</Text>
                </ImageBackground>
            </Layout>
            <Layout style={{width: '65%', height: '100%'}}>
                <Layout style={{height: '60%',justifyContent: 'center', alignItems: 'center'}}>
                    <Text category='h4' style={{fontFamily: 'Roboto_700Bold'}}>{props.name}</Text>
                    <Text category='s2' style={{fontFamily: 'Roboto_700Bold'}}>{props.description}</Text>
                    <Text style={{fontFamily: 'Roboto_700Bold'}}>{props.price}</Text>

                </Layout>

                <Layout style={{flexDirection: 'row', height: '40%',justifyContent: 'center', alignItems: 'center'}}>
                    <Button onPress={()=> handleClick} size='small' style={{width: '60%', height: '50%'}}>
                        SHOW MORE
                    </Button>

                </Layout>

                
                
            </Layout>

        </Layout>
    )
}