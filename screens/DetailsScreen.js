import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {styles} from '../styles/main';

class DetailsScreen extends React.Component{
    // Show list of contents
    constructor(props){
      super(props);
    }
    render(){
      return(
        <View style={ styles.container }>
          <Text>Item's list details Screen</Text>
        </View>
      );
    }
}

export default DetailsScreen;