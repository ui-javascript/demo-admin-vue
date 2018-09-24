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

const {Surface, Text, Path} = ART;

export default class ArtTextView extends Component {

    render() {

        return (
            <View style={styles.container}>
                <Surface width={100} height={100}>
                    <Text strokeWidth={1} stroke="#000" font="bold 35px Heiti SC" path={new Path().moveTo(40,40).lineTo(99,10)} >React</Text>
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

