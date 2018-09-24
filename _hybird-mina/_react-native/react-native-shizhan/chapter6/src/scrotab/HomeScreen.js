/**
 * https://github.com/facebook/react-native
 * @flow
 */


import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';


export default class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>首页页面</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
    }

});

