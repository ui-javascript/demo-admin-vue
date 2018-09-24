/**
 * https://github.com/facebook/react-native
 * @flow 空视图页面
 */


import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class SpacingView extends Component {
    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 14,
        backgroundColor: '#f3f3f3',
    },
});

export default SpacingView;
