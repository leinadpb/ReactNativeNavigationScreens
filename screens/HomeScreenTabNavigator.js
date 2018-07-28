import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import TakePhotoScreen from './TakePhotoScreen';
import ConfigurationScreen from './ConfigurationScreen';

const HomeScreenTabNavigator = new createBottomTabNavigator({
    Home:{
        screen:HomeScreen,
        navigationOptions:{
            header:null,
            tabBarLabel:"Home",
            tabBarIcon: ({ focused, tintColor }) => {
                return <Ionicons name="md-home" size={25} color={tintColor} />;
            },
        }
    },
    TakePhoto:{
        screen:TakePhotoScreen,
        navigationOptions:{
            tabBarLabel:"Photo me",
            tabBarIcon: ({ focused, tintColor }) => {
                return <Ionicons name="md-camera" size={25} color={tintColor} />;
            },
        }
    },
    Configuration:{
        screen:ConfigurationScreen,
        navigationOptions:{
            tabBarLabel:"Settings",
            tabBarIcon: ({ focused, tintColor }) => {
                return <Ionicons name="md-settings" size={25} color={tintColor} />;
            },
        },
    }
},{
    initialRouteName:'Home',
    tabBarOptions:{
        activeTintColor:'#3390b2',
        inactiveTintColor:'gray',
    }
});

export default HomeScreenTabNavigator;