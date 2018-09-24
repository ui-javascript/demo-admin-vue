/**
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import Header from '../component/Header';
import { View,StyleSheet,Text} from 'react-native';


export default class HomeScreen extends Component {

    render() {
        return (
        <View>
        <Header text='首页'> </Header>
        <View style={styles.page}>
        <Text style={styles.text}>我是首页</Text>
        </View>
      </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 18,
        margin: 10
    }

});

