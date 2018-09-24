/**
 * https://github.com/facebook/react-native
 * @flow
 */


import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class MineScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>我的页面</Text>
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

