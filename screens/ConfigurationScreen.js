import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {styles} from '../styles/main';

class ConfigurationScreen extends React.Component{
    // Show the configuration screen
    constructor(props){
      super(props);
    }
    render(){
      return(
        <View style={ styles.container }>
          <Text>Configuration's list</Text>
        </View>
      );
    }
}

export default ConfigurationScreen;

