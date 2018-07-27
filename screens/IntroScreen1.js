import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {styles} from '../styles/main';


class IntroScreen1 extends React.Component{
    // Show the first time using the app.. Allow user to set initial values for the app.
    constructor(props){
      super(props);
    }
    render(){
      return(
        <View style={ styles.container }>
          <Text>Show First Time Using The App</Text>
        </View>
      );
    }
}

export default IntroScreen1;

