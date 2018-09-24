/**
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import GridItem from './GridItem'

var Dimensions = require('Dimensions');
var screen = Dimensions.get('window');

class GridView extends Component {

    render() {
        let { infos } = this.props
        let gridItems = []
        for (let i = 0; i < infos.length; i++) {
            let gridItem = (
                <GridItem info={infos[i]} key={i} onPress={() => this.props.onGridSelected(i)}/>
            )
            gridItems.push(gridItem)
        }

        return (
            <View style={styles.container}>
                {gridItems}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:screen.width,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#e9e9e9'
    },
});

export default GridView;
