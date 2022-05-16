import * as React from 'react'
import { StyleSheet, View, Linking, Dimensions  } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'
import { Layout, Button, Text, Input, useTheme } from '@ui-kitten/components';
import { HomeHeader } from '../components/home.header';
import { MealSection } from '../components/home.mealSection';


export const HomePage = ()=>{

    const Height = Dimensions.get('screen').height
    const Width = Dimensions.get('screen').width

    const styles = StyleSheet.create({
        container: {
            flex: 1
        }

    })

    return (
        <Layout>
            <HomeHeader/>
        </Layout>


    )
}