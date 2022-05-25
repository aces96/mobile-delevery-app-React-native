import * as React from 'react'
import { Layout, Button, Text, Input, Modal, Card } from '@ui-kitten/components';
import {useSelector, useDispatch} from 'react-redux'
import { update } from '../assets/redux/modal.slice';
import { useState } from 'react';
import { useFonts } from "expo-font";
import Storage from '../assets/storage/storage'
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



export const MealModal = ()=>{
  const [quantity, setQuantity] = useState('')
  const dispatch = useDispatch()
  let show = useSelector(state=>state.modalReducer.show)
  let meal = useSelector(state=>state.modalReducer.meal)
  console.log(meal);


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

  const handleSubmit =  async (meal, quantity)=>{
    const payload = {
      meal,
      quantity: quantity
    }
    let num = Math.floor(Math.random() * 40)
    let key = num.toString()
    console.log(key);
    const storage = new Storage
    // await storage.remove()
    await storage.storeData(key,payload)

  }
    return (
        <Modal
        visible={show}
        backdropStyle='rgba(0, 0, 0, 0.6)'
        style={{width: '80%'}}
        onBackdropPress={() => {dispatch(update(false))
                                setQuantity('')
        }}>
        <Card  disabled={true}>
          <Text style={{textAlign: 'center'}}>YOUR MEAL</Text>
                <Layout style={{width: '90%', height: 50, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text category='h5'>{meal.name}</Text>
                    <Text category='h5'>{meal.price} DH</Text>
                </Layout>

                <Input onChangeText={(e)=> setQuantity(e)} style={{width: '40%', margin:5, alignSelf: 'center'}} label='enter the quantity' placeholder='1'  status='primary' />
              
          <Button onPress={() => {
            dispatch(update(false))
            handleSubmit(meal,quantity)
            }}>
            ADD TO CART
          </Button>
        </Card>
      </Modal>
    )
}