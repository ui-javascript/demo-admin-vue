/**
 * https://github.com/huanxsd/MeiTuan
 * @flow GridItem上边图片下边文字
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Paragraph} from '../component/Text'

var Dimensions = require('Dimensions');
var screen = Dimensions.get('window');

class ActionBar extends Component {

    renderHeader() {
        return (
                <View style={styles.topContainer}>
                    <TouchableOpacity>
                        <Text style={styles.text}>上海</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.searchBar}>
                        <Image source={require('../images/search_icon.png')} style={styles.icon} />
                        <Paragraph>一点点</Paragraph>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.scan}>
                        <Image style={styles.scanIcon}
                               source={require('../images/icon_homepage_map_selected.png')}/>
                               <Text style={styles.scanText}>扫码</Text>
                    </TouchableOpacity>
                </View>
        )
    }

    render() {

        return (
            <View>
            {this.renderHeader()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
    topContainer: {
        flexDirection: 'row',
        backgroundColor: '#06C1AE',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
    },
    searchBar: {
        width: screen.width * 0.65,
        height: 30,
        borderRadius: 19,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        alignSelf: 'center',
        paddingLeft:10,
    },
    text: {
        fontSize: 16,
        color: '#ffffff',
        justifyContent: 'center',
        marginRight:10
    },
    icon: {
        width: 25,
        height: 25,
    },
    scan: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
    },
    scanIcon: {
        width: 32,
        height: 32,
        alignItems:'center',
        marginLeft:10,
    },
    scanText: {
        fontSize: 14,
        color: '#ffffff',
        justifyContent: 'center',
        alignItems:'center',
    },
});

export default ActionBar;
