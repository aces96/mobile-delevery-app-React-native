import * as React from 'react'
import { StyleSheet, View, Linking, Dimensions, ScrollView  } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'
import { Layout, Button, Text, Input, useTheme } from '@ui-kitten/components';
import {useSelector, useDispatch} from 'react-redux'
import { OrderCard } from '../components/orderCard';
import { OrderModal } from '../components/OrderModal';






export const LivreurOrderScreen = ()=>{

    
    const styles = StyleSheet.create({
        container:  {
            lexGrow: 1,
            alignItems: 'center'
        }
    })

    return (

        <ScrollView contentContainerStyle={styles.container}>
            <Text style={{textAlign: 'center', marginBottom: 10}}>
                All Orders
            </Text>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>

        <OrderModal/>
        </ScrollView>

    )
}