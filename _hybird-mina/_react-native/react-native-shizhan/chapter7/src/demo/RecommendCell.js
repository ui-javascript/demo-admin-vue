import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Heading1, Heading2, Paragraph } from '../component/Text'

var Dimensions = require('Dimensions');
var screen = Dimensions.get('window');

class RecommendCell extends Component {
    render() {
        let { info } = this.props
        let imageUrl = info.imageUrl.replace('w.h', '160.0').replace('http','https')
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.props.onPress()}>
                <Image source={{ uri: imageUrl }} style={styles.icon} />

                <View style={styles.rightContainer}>
                    <Heading1>{info.title}</Heading1>
                    <View>
                    </View>
                    <Paragraph numberOfLines={0} style={{ marginTop: 8 }}>{info.subtitle}</Paragraph>
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <Heading1 style={styles.price}>{info.price}元</Heading1>
                    </View>

                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#e9e9e9',
        backgroundColor: 'white',
    },
    icon: {
        width: 80,
        height: 80,
        borderRadius: 5,
    },
    rightContainer: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 10,
    },
    price: {
        color: '#06C1AE'
    }
});

export default RecommendCell;
