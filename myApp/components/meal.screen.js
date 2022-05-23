import * as React from 'react'
import { StyleSheet, ScrollView, Linking, Image, Dimensions } from "react-native"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather'
import { MealCard } from './meal.card';
import { MealModal } from './meal.modal';
import axios from 'axios';
import { addRepas } from '../assets/redux/meals.slice';




export const  MealScreen = ()=>{
    let meals= useSelector(state=> state.mealReducer.repas) 
    const dispatch = useDispatch()



    const styles = StyleSheet.create({
        container: {
            flexGrow: 1,
            alignItems: 'center'
        },
    })
    useEffect(()=>{
            const getRepas = async ()=>{
                let data = await axios.get('http://172.16.11.127:8000/api/repas')
                    .then((res)=>{
                        dispatch(addRepas(res.data.repas))
                    }).catch((err)=>{
                        console.log(err);
                    })
            }


            getRepas()
            console.log(meals)
    },[])
    


    return (
        
        <ScrollView contentContainerStyle={styles.container}>
            <MealModal/>

            {meals.map(e=>{
                return(
                    <MealCard name={e.name} description={e.description} price= {e.prix} />
                )
            })}
        </ScrollView>
        
    )
} 