/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Animated,
    TouchableOpacity,
    Easing,
    View
} from 'react-native';


export default class AnimationRotateScene extends Component {

    constructor(props) {
        super(props);
        this.spinValue = new Animated.Value(0)
    }

    componentDidMount () {
        this.spin()
    }

    spin () {
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear
            }
        ).start(() => this.spin())
    }


    render() {

        const
            spin = this.spinValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg']
            })


        return (
            <View style={styles.container}>

                <Animated.Image
                    style={{
                        width: 227,
                        height: 200,
                        transform: [{rotate: spin}] }}
                    source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
                />
                <TouchableOpacity onPress={() => this.spin()} style={styles.button}>
                    <Text>启动动画</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginTop: 20,
        backgroundColor:'#808080',
        height:35,
        width:140,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',

    },


});

