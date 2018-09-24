/**
 * https://github.com/huanxsd/MeiTuan
 * @flow GridItem上边图片下边文字
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Heading1, Heading2 } from '../component/Text'


var Dimensions = require('Dimensions');
var screen = Dimensions.get('window');

class GridItem extends Component {
    render() {
        let info = this.props.info

        let title = info.maintitle
        let color = info.typeface_color
        let subtitle = info.deputytitle
        let imageUrl = info.imageurl.replace('w.h', '120.0').replace('http','https')

        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                <View>
                    <Heading1 style={{ color: color, marginBottom: 10}}>{title}</Heading1>
                    <Heading2 >{subtitle}</Heading2>
                </View>

                <Image style={styles.icon} source={{uri: imageUrl}} />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: screen.width / 2 - 0.5,
        height: screen.width / 4,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderColor: '#e9e9e9'
    },
    icon: {
        width: screen.width / 5,
        height: screen.width / 5,
    }
});

export default GridItem;
