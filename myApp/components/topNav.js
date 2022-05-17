import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabBar, Tab, Layout, Text } from '@ui-kitten/components';
import { MealScreen } from './meal.screen';
import { HomePage } from '../containers/home';

const { Navigator, Screen } = createMaterialTopTabNavigator();



export const TopTabBar = ({ navigation, state }) => (
  <TabBar
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <Tab title='HOME'/>
    <Tab title='MEALS'/>
  </TabBar>
);

export const TabNavigator = () => (
  <Navigator tabBar={props => <TopTabBar {...props} />}>
    <Screen name='HOME' component={HomePage}/>
    <Screen name='MEALS' component={MealScreen}/>
  </Navigator>
);