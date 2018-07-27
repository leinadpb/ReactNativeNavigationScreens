import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {styles} from '../styles/main';

class TermsAndConditionsScreen extends React.Component{
    // Show the terms and conditions of the App
    constructor(props){
      super(props);
    }
    render(){
      return(
        <View style={ styles.container }>
          <Text>Term's and conditions</Text>
        </View>
      );
    }
}

export default TermsAndConditionsScreen;

