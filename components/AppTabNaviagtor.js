import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '../screens/Home';
import Exchange from '../screens/Exchange';



export const AppTabNavigator = createBottomTabNavigator({
 Home: {
    screen: Home,
    
  },
  Exchange : {
    screen: Exchange,
   
  }
});
