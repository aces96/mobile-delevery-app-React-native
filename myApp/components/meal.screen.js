import * as React from 'react'
import { StyleSheet, ScrollView, Linking, Image, Dimensions } from "react-native"
import { Layout, Button, Text, Input, useTheme, Modal } from '@ui-kitten/components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather'
import { MealCard } from './meal.card';
import axios from 'axios';




export const  MealScreen = ()=>{

    const styles = StyleSheet.create({
        container: {
            flexGrow: 1,
            alignItems: 'center'
        },
    })

    const dispatch = useDispatch()


    useEffect(()=>{

        const meals = axios.get('http://172.18.160.1:8000/api/repas')
                            .then((res)=>{
                                console.log(res);
                            }).catch((err)=>{
                                console.log(err);
                            })

    },[])


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <MealCard/>
            <MealCard/>
            <MealCard/>
            <MealCard/>
        </ScrollView>
    )
} 