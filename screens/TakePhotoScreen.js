import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {styles} from '../styles/main';

class TakePhotoScreen extends React.Component{
    // Show screeen for taking a photo
    constructor(props){
      super(props);
    }
    render(){
      return(
        <View style={ styles.container }>
          <Text>Allow user to take a Photo</Text>
        </View>
      );
    }
}

export default TakePhotoScreen;

