import * as React from 'react'
import { StyleSheet,ScrollView } from "react-native"
import { Button, Layout, Text, Icon } from '@ui-kitten/components';
import { FlipInXDown } from 'react-native-reanimated';



const UpdateIcon = (props) => (
    <Icon {...props} name='edit'/>
  );




export const ProfilUpdate = ()=>{



    return (
        <Layout accessoryL style={{height: 40, width: '100%' , alignItems: 'flex-end'}}>
            <Button style={{backgroundColor: '#606470'}} size='small' accessoryLeft={UpdateIcon}>EDIT</Button>

        </Layout>
    )
}