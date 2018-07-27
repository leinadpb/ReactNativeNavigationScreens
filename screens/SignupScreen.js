import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {styles} from '../styles/main';

class SignupScreen extends React.Component{
    // Show SingUp screen 
    constructor(props){
        super(props);
    }
    render(){
        return(
        <View style={ styles.container }>
            <Text>SingUp Screen</Text>
            <Button 
                title="Complete SingUp" 
                onPress={() => {this.props.navigation.navigate('DrawerNavigator')}} />
        </View>
        );
    }
}

export default SignupScreen;