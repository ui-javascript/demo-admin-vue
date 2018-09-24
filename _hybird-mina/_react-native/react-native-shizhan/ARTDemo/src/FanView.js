/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow 扇形
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    ART,
    View
} from 'react-native';

const {Surface} = ART;
import Wedge from './Wedge'

export default class FanView extends Component {

    render() {

        return (
            <View style={styles.container}>
                <Surface width={100} height={100}>
                    <Wedge
                        outerRadius={50}
                        startAngle={0}
                        endAngle={60}
                        originX={50}
                        originY={50}
                        fill="blue"/>
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

