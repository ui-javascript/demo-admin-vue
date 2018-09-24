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
            <View style={styles.flexStyle}>
                <NavBar title="我的"/>
                <Text style={styles.textStyle}>我的</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flexStyle: {
        flex: 1,
        width:width
    },
    textStyle: {
        fontSize: 20,
        alignItems: 'center'
    },

});

