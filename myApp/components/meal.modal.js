import * as React from 'react'
import { StyleSheet, View, Linking, Image,ImageBackground, Dimensions } from "react-native"
import { Layout, Button, Text, Input, useTheme } from '@ui-kitten/components';




export const MealModal = ()=>{







    return (
        <Modal
        visible={visible}
        backdropStyle='rgba(0, 0, 0, 0.6)'
        onBackdropPress={() => setVisible(false)}>
        <Card disabled={true}>
          <Text>Welcome to UI Kitten 😻</Text>
          <Button onPress={() => setVisible(false)}>
            DISMISS
          </Button>
        </Card>
      </Modal>
    )
}