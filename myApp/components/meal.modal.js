import * as React from 'react'
import { Layout, Button, Text, Input, Modal, Card } from '@ui-kitten/components';
import {useSelector, useDispatch} from 'react-redux'
import { update } from '../assets/redux/modal.slice';
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



export const MealModal = ()=>{
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
    return (
        <Modal
        visible={show}
        backdropStyle='rgba(0, 0, 0, 0.6)'
        style={{width: '80%'}}
        onBackdropPress={() => dispatch(update(false))}>
        <Card disabled={true}>
          <Text style={{textAlign: 'center'}}>YOUR MEAL</Text>
                <Layout style={{width: '90%', height: 120, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text category='h5'>{meal[0].name}</Text>
                        <Text>{meal[0].price} DH</Text>
                </Layout>
          <Button onPress={() => dispatch(update(false))}>
            DISMISS
          </Button>
        </Card>
      </Modal>
    )
}