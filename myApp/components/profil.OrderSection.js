import * as React from 'react'
import { StyleSheet,ScrollView } from "react-native"
import { Button, Layout, Text } from '@ui-kitten/components';
import { useSelector, useDispatch } from 'react-redux';
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





export const OrderSection = ()=>{

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
            width:'100%',
            height: '30%',
            borderRadius: 10
        }
    })



    return(
        <Layout style={styles.container}>
            <Layout style={{alignItems: 'center',flexDirection: 'row',justifyContent: 'space-between', height: '50%'}}>
                <Text category='h6' style={{marginLeft: 10, fontFamily: 'Roboto_700Bold'}}>total orders : </Text>
                <Text category='h6' style={{marginRight: 10,fontFamily: 'Roboto_700Bold'}}>10</Text>
            </Layout>
            <Layout style={{height: '50%', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                <Button size='small' style={{width: '40%', height: '60%'}}>Show More</Button>
            </Layout>

        </Layout>
    )
}