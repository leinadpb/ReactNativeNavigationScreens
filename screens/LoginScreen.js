import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {styles} from '../styles/main';

class LoginScreen extends React.Component{
    // Show Login screen
    constructor(props){
      super(props);
    }
    render(){
      return(
        <View style={ styles.container }>
          <Text>Login Screen</Text>
          <Button title="Complete login" onPress={() => {this.props.navigation.navigate('DrawerNavigator')}} />
        </View>
      );
    }
}
export default LoginScreen;