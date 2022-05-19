import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Modal, Text } from '@ui-kitten/components';
import {useSelector, useDispatch} from 'react-redux'
import { updateVisibily } from '../assets/redux/orderModal.slice';
import { useState, useEffect } from 'react';








export const OrderModal = (props) => {
    const dispatch = useDispatch()
    let visible = useSelector(state=>state.OrderModalReducer.visibility)


    console.log(visible);





    
    const styles = StyleSheet.create({
        container: {
          minHeight: 192,
        },
        backdrop: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      });
  
    return (
    <View style={styles.container}>
        <Modal
            visible={visible}
            backdropStyle={styles.backdrop}
            onBackdropPress={()=>{
                dispatch(updateVisibily(false))

            }}>
            <Card disabled={true}>
                <Text>Orders Modal</Text>
                <Button onPress={() => dispatch(updateVisibily(false))}>
                DISMISS
                </Button>
            </Card>
        </Modal>
  
    </View>
    );

  };