/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow ScrollView组件
 */

import React, {Component} from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    View
} from 'react-native';

import NavBar from '../component/NavBar'
const { width } = Dimensions.get('window');

export default class MineScene extends Component {

    render() {
        return (
            <View style={styles.container}>
                <NavBar title="我的"/>
                <View style={styles.flex}>
                <Text style={styles.textStyle}>我的</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:width
    },
    flex: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    },
    textStyle: {
        fontSize: 20,
    },

});

