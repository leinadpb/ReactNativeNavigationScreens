import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import DrawerNavigator from './screens/DrawerNavigator';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const RootNavigation = createStackNavigator({
  Welcome:{screen:WelcomeScreen},
  Login:{screen:LoginScreen},
  Signup:{screen:SignupScreen},
  DrawerNavigator:{screen:DrawerNavigator },
});

export default class App extends React.Component {
  render() {
    return (
      <RootNavigation />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
