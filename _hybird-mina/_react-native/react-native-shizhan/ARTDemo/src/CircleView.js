/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    ART,
    View
} from 'react-native';

const {Surface, Shape, Path} = ART;

export default class CircleView extends Component {

    render() {

        const path = new Path()
            .moveTo(50,1)
            .arc(0,99,25)
            .arc(0,-99,25)
            .close();

        return (
            <View style={styles.container}>
                <Surface width={100} height={100}>
                    <Shape d={path} stroke="#000000" strokeWidth={1}/>
                </Surface>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});

