/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
    Text,
    View
} from 'react-native';
import NavBar from '../component/NavBar'
const { width } = Dimensions.get('window');


export default  class OrderScreen extends Component {

    render() {
        return (
            <View style={styles.flexStyle}>
                <NavBar title="订单"/>
                <Text style={styles.textStyle}>订单</Text>
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

