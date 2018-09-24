/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow ScrollView组件
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Dimensions,
    Text,
    View
} from 'react-native';
import NavBar from '../component/NavBar'
const { width } = Dimensions.get('window');

export default class NearbyScreen extends Component {

    render() {
        return (
            <View style={styles.flexStyle}>
                <NavBar title="附件"/>
                <Text style={styles.textStyle}>附件</Text>
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

