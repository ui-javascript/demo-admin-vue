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

export default class LineView extends Component {

    render() {

        const path = Path()
            .moveTo(1, 1)
            .lineTo(300, 1);

        return (
            <View style={styles.container}>
                <Surface width={300} height={2}>
                    <Shape d={path} stroke="#000000" strokeWidth={2} />
                </Surface>
                <View style={{marginTop:20}}/>
                <Surface width={300} height={2}>
                    <Shape d={path} stroke="#000000" strokeWidth={2} strokeDash={[10, 5]}/>
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

