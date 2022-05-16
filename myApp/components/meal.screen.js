import * as React from 'react'
import { StyleSheet, ScrollView, Linking, Image, Dimensions } from "react-native"
import { Layout, Button, Text, Input, useTheme, Modal } from '@ui-kitten/components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather'
import { MealCard } from './meal.card';
import axios from 'axios';
import { addRepas } from '../assets/redux/meals.slice';




export const  MealScreen = ()=>{

    let [meals,setMeals] = React.useState([])

    const styles = StyleSheet.create({
        container: {
            flexGrow: 1,
            alignItems: 'center'
        },
    })
    const dispatch = useDispatch()
    


    useEffect(()=>{

        const getRepas =  async ()=>{
             data =   await axios.get('http://172.18.160.1:8000/api/repas')
                            .then((res)=>{
                                dispatch(addRepas(res.data.repas))
                                setMeals(meals =  res.data.repas)
                            }).catch((err)=>{
                                console.log(err);
                            })
        }

        getRepas()


    },[])    


    


    return (
        <ScrollView contentContainerStyle={styles.container}>

            {meals.map(e=>{
                return(
                    <MealCard name={e.name} description={e.description} price= {e.prix} />
                )
            })}
            
          
        </ScrollView>
    )
} 