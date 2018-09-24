/**
 * https://github.com/huanxsd/MeiTuan
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;

class Separator extends Component {
    render() {
        return (
            <View style={[styles.line, this.props.style]} />
        );
    }
}

const styles = StyleSheet.create({
    line: {
        width: ScreenWidth,
        height: 1,
        backgroundColor: '#e9e9e9',
    },
});

export default Separator;
