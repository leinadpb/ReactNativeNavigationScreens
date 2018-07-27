import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {styles} from '../styles/main';

class HomeScreen extends React.Component{
    // Show list of contents
    constructor(props){
      super(props);
    }
    render(){
      return(
        <View style={ styles.container }>
          <Text>Home Screen</Text>
        </View>
      );
    }
}

export default HomeScreen;