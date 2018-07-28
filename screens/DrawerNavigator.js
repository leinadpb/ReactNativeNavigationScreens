import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';

import HomeScreenTabNavigator from './HomeScreenTabNavigator';

const InnerStackNavigator = createStackNavigator({
  TabNavigator:{screen:HomeScreenTabNavigator}
});

const DrawerNavigator = createDrawerNavigator({
  Home:{screen:InnerStackNavigator},
});

export default DrawerNavigator;