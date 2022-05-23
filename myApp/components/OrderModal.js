import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Modal, Text, Layout } from '@ui-kitten/components';
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
          width: '100%'
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
            style={{width: '80%'}}
            onBackdropPress={()=>{
                dispatch(updateVisibily(false))

            }}>
            <Card style={styles.card} disabled={true}>
                <Text>Orders Modal</Text>
                <Layout style={{justifyContent: 'space-between', flexDirection: 'row', marginBottom: 5}}>
                  <Text>MEAL1</Text>
                  <Text>30DH</Text>
                </Layout>
                <Button onPress={() => dispatch(updateVisibily(false))}>
                Submit
                </Button>
            </Card>
        </Modal>
  
    </View>
    );

  };