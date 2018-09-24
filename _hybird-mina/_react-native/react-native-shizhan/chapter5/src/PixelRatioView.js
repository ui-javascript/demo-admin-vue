/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow PixelRatio组件使用
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    PixelRatio,
    View
} from 'react-native';


export default class PixelRatioView extends Component {


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>
                    PixelRatio实例
                </Text>
                <Text style={styles.textStyle}>
                    当前的屏幕像素密度比例为: {PixelRatio.get()}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        marginTop: 20
    },
    textStyle: {
        fontSize: 18,
        textAlign: 'center',
        backgroundColor: '#ffffff',
        marginTop: 10
    }

});

