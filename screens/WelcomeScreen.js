import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {styles} from '../styles/main';

class WelcomeScreen extends React.Component{
    // Show welcome screen
    static navigationOptions = {
      header:null,
    }
    constructor(props){
      super(props);
    }
    render(){
      return(
        <View style={ styles.container }>
          <Text>Welcome Screen</Text>
          <Button title="Login" onPress={() => {this.props.navigation.navigate('Login')}} />
          <Button title="Singup" onPress={() => {this.props.navigation.navigate('Signup')}} />
        </View>
      );
    }
}

export default WelcomeScreen;