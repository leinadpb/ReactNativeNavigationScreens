import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';

const DrawerNavigator = createDrawerNavigator({
  Home:{screen:HomeScreen},
});

export default DrawerNavigator;